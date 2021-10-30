const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

// new.hbs (create)
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', async (req, res) => {
  const categoryObj = await Category.findOne({ name: req.body.category }).lean()
  return Record.create({ ...req.body, categoryId: categoryObj._id, userId: req.user._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit.hbs (update)
router.get('/:id/edit', (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id })
    .populate('categoryId')
    .lean()
    .then(record => res.render('edit', { record }))
    .catch(error => console.log(error))
})
router.put('/:id', async (req, res) => {
  const categoryObj = await Category.findOne({ name: req.body.category }).lean()
  return Record.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, { $set: req.body, categoryId: categoryObj._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete
router.delete('/:id', (req, res) => {
  return Record.findOneAndRemove({ _id: req.params.id, userId: req.user._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
