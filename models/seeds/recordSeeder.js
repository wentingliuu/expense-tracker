const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')

const Category = require('../category')
const User = require('../user')
const Record = require('../record')

const users = require('./user.json').users
const records = require('./record.json').records

db.once('open', async () => {
  await users.forEach(user => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(user.password, salt))
      .then(hash => User.create({
        name: user.name,
        email: user.email,
        password: hash
      }))
  })
  await records.forEach(async record => {
    const recordCategory = await Category.findOne({ name: record.category }).lean()
    const recordUser = await User.findOne({ name: record.user }).lean()
    Record.create({
      name: record.name,
      date: record.date,
      amount: record.amount,
      userId: recordUser._id,
      categoryId: recordCategory._id
    })
  })

  console.log('recordSeeder created!')
  console.log('press ^C to quit.')
})
