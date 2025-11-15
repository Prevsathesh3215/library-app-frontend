const jwt = require('jsonwebtoken')
const { jwtExpirationInSeconds, jwtSecret } = require('../config')
require('dotenv').config()


const generateAccessToken = (username, userId) => {

  return jwt.sign(
    {
      userId,
      username,
    },
    process.env.jwtSecret,
    {
      expiresIn :jwtExpirationInSeconds
    }
  );

  

};

module.exports =  {
  generateAccessToken
}