const conn = require('./conn')
const Sequelize = conn.Sequelize

const Task = conn.define('task', {
  description: {
    type: Sequelize.STRING
  },
  duration: {
    type: Sequelize.FLOAT
  },
  priority: {
    type: Sequelize.FLOAT
  },
  pinned: {
    type: Sequelize.BOOLEAN
  },
  recurrence: {
    type: Sequelize.JSON
  }
})

module.exports = Task
