const UsersJson = require('./users.json')
const UserModel = require('../../models/user')

const createUsers = async (users) => {
  const xx = await UserModel.create(users)
  console.log(`Created ${xx.length} users`)
}

module.exports = createUsers(UsersJson)
