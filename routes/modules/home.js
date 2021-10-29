const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  let totalAmount = 0
  Record.find()
    .lean()
    .then(records => {
      records.forEach(async record => {
        totalAmount += Number(record.amount)
        const recordCategory = await Category.findOne({ _id: record.categoryId }).lean()
        record.categoryIcon = recordCategory.icon
      })
      return res.render('index', { records, totalAmount })
    })
    .catch(error => console.error(error))
})

module.exports = router