const { USER, PASSWORD } = require('../secret.js')
require('dotenv').config()

module.exports = {
  HOST: '127.0.0.1',
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: 'library_db',
  dialect: 'mysql', 
  pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}
}