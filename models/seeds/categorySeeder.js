const db = require('../../config/mongoose')

const Category = require('../category')
const categories = require('./category.json').categories

db.once('open', async () => {
  await Category.create(categories)
    .then(() => {
      console.log('categorySeeder created.')
      process.exit()
    })
    .catch(err => console.log(err))
})
