const conn = require('./conn')
const Sequelize = conn.Sequelize

const Project = conn.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

module.exports = Project
