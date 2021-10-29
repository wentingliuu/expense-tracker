const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const User = require('../../models/user')

// new.hbs (create)
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', async (req, res) => {
  console.log(req.body)
  const category = await Category.findOne({ name: req.body.category }).lean()
  const user = await User.findOne({ name: '廣志' }).lean()
  return Record.create({ ...req.body, categoryId: category._id, userId: user._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
