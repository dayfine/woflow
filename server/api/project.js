const router = require('express').Router()
const { Project } = require('../db').models

router
  .get('/', (req, res, next) => {
    Project.findAll({ order: ['name'] })
      .then(projects => res.send(projects))
      .catch(next)
  })

  .post('/:name', (req, res, next) => {
    Project.create({ name: req.params.name })
      .then(project => res.send(project))
      .catch(next)
  })

  .put('/:id', (req, res, next) => {
    Project.findById(req.params.id)
      .then(project => project.update(req.body))
      .then(_project => res.send(_project))
      .catch(next)
  })

  .delete('/:id', (req, res, next) => {
    Project.findById(req.params.id)
      .then(project => project.destroy())
      .then(result => res.send(result))
      .catch(next)
  })

module.exports = router
