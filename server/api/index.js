const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/task', require('./task'))
router.use('/project', require('./project'))

module.exports = router
