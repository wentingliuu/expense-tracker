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
  const category = await Category.findOne({ name: req.body.category }).lean()
  const user = await User.findOne({ name: '廣志' }).lean()
  return Record.create({ ...req.body, categoryId: category._id, userId: user._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit.hbs (update)
router.get('/:id/edit', (req, res) => {
  Record.findOne({ _id: req.params.id })
    .lean()
    .then(async record => {
      const category = await Category.findOne({ _id: record.categoryId }).lean()
      return res.render('edit', { record, category: category.name })
    })
    .catch(error => console.log(error))
})
router.put('/:id', async (req, res) => {
  const { name, date, amount, category } = req.body
  const newCategory = await Category.findOne({ name: category }).lean()
  const user = User.findOne({ name: '廣志' }).lean()
  return Record.findOneAndUpdate({ _id: req.params.id }, { name, date, amount, categoryId: newCategory._id, userId: user._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findByIdAndRemove(id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
