const conn = require('./conn')
const User = require('./User')
const Task = require('./Task')
const Project = require('./Project')

Project.belongsTo(User)
User.hasMany(Project)

Task.belongsTo(User)
User.hasMany(Task)

Task.belongsTo(Project)
Project.hasMany(Task)

const sync = () => conn.sync({ force: true })
const seed = () => {
  User.create({ name: 'John' })
}

module.exports = {
  sync,
  seed,
  models: {
    User,
    Task,
    Project
  }
}
