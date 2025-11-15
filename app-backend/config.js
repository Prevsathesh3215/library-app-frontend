const { jwtSecret } = require('./secret.js')

module.exports = {
  jwtSecret: jwtSecret,
  jwtExpirationInSeconds: 60 * 5, //5 mins
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  }
}
