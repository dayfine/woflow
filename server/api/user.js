const router = require('express').Router()
const { User } = require('../db').models

router
  .get('/', (req, res, next) => {
    User.findAll({ order: ['id'] })
      .then(users => res.send(users))
      .catch(next)
  })

  .post('/', (req, res, next) => {
    User.create(req.body)
      .then(user => res.send(user))
      .catch(next)
  })

  .put('/:id', (req, res, next) => {
    User.findById(req.params.id)
      .then(user => user.update(req.body))
      .then(_user => res.send(_user))
      .catch(next)
  })

  .delete('/:id', (req, res, next) => {
    User.findById(req.params.id)
      .then(user => user.destroy())
      .then(result => res.send(result))
      .catch(next)
  })

module.exports = router
