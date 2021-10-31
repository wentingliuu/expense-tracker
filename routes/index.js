const express = require('express')
const router = express.Router()

const { authenticator } = require('../middleware/auth')

const home = require('./modules/home')
const records = require('./modules/records')
const users = require('./modules/users')
const auth = require('./modules/auth')
const error = require('./modules/error')

router.use('/auth', auth)
router.use('/users', users)
router.use('/records', authenticator, records)
router.use('/', authenticator, home)
router.use('*', error)

module.exports = router
