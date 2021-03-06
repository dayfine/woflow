const conn = require('./conn')
const Sequelize = conn.Sequelize

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  setting: {
    type: Sequelize.JSON
  }
})

module.exports = User
