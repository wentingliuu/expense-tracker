const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')

const Category = require('../category')
const User = require('../user')
const Record = require('../record')

const userSeeder = require('./user.json').users
const recordSeeder = require('./record.json').records

db.once('open', async () => {
  for (const user of userSeeder) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    await User.create({
      name: user.name,
      email: user.email,
      password: hash
    })
  }

  for (const record of recordSeeder) {
    const recordCategory = await Category.findOne({ name: record.category }).lean()
    const recordUser = await User.findOne({ name: record.user }).lean()
    await Record.create({
      name: record.name,
      date: record.date,
      amount: record.amount,
      userId: recordUser._id,
      categoryId: recordCategory._id
    })
  }

  console.log('recordSeeder created!')
  process.exit()
})
