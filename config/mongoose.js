const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/expense-list')
const db = mongoose.connection

db.on('error', () => {
  console.log('MongoDB error!')
})
db.once('open', () => {
  console.log('MongoDB connected!')
})
