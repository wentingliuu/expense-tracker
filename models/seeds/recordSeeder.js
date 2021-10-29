const db = require('../../config/mongoose')

const Category = require('../category')
const User = require('../user')
const Record = require('../record')

const users = require('./user.json').users
const records = require('./record.json').records

db.once('open', async () => {
  await User.create(users)
    .then(async () => {
      await records.forEach(
        async record => {
          const recordCategory = await Category.findOne({ name: record.category }).lean()
          const recordUser = await User.findOne({ name: record.user }).lean()
          await Record.create({
            name: record.name,
            date: record.date,
            amount: record.amount,
            userId: recordUser._id,
            categoryId: recordCategory._id
          })
        })
    })
    .then(() => {
      console.log('recordSeeder created.')
    })
    .catch(err => console.log(err))
})
