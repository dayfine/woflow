const router = require('express').Router()
const { Task } = require('../db').models

router
  .get('/', (req, res, next) => {
    Task.findAll({ order: ['id'] })
      .then(tasks => res.send(tasks))
      .catch(next)
  })

  .post('/', (req, res, next) => {
    Task.create(req.body)
      .then(task => res.send(task))
      .catch(next)
  })

  .put('/:id', (req, res, next) => {
    Task.findById(req.params.id)
      .then(task => task.update(req.body))
      .then(_task => res.send(_task))
      .catch(next)
  })

  .delete('/:id', (req, res, next) => {
    Task.findById(req.params.id)
      .then(task => task.destroy())
      .then(result => res.send(result))
      .catch(next)
  })

module.exports = router
