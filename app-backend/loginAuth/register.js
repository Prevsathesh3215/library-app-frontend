const regisUserController = require('../controllers/regisUserController.js')
const db = require('../models/setup_db.js')
const { generateAccessToken } = require('../helper/generateAccessToken.js')
const jwt = require('jsonwebtoken')
const { jwtSecret, roles, jwtExpirationInSeconds } = require('../config')
const bcrypt = require('bcrypt')


const RegisUser = db.regisUser


async function registerUser(req, res){
  const payload = req.body
  // console.log(payload.username)

  try{
    // let encryptedPassword = await encryptPswd(payload.password);
    // payload.password = encryptedPassword

    if (!payload.role){
      payload.role =  roles.USER
    }


    const registeredUser = await regisUserController.addRegisUser(payload)

    // const accessToken = generateAccessToken(payload.username, payload.id)
    // console.log(accessToken)

    return res.status(200).json({
      status: true,
      data: {
        user: registeredUser.toJSON(),
        // token: accessToken,
      }
    })
  }
  catch (error){
    // console.error(error);
      return res.status(500).json({
        status: false,
        message: 'Error registering user',
        error: error.message,
      });
  }
}


function userLogin(req, res, next){

  const authHeader = req.headers.authorization
  // console.log(authHeader.authorization)

  if (authHeader){
    jwt.verify(authHeader, jwtSecret, (err, decoded) => {

      if (err){
        res.status(403).json({
          success: "false",
          message: "invalid token"
        })
      }
      else{
        // res.status(200).json({
        //   success: "true",
        //   message: "Authorized, welcome to protected route",
        //   payload: decoded
        // })
        next()
      }
    })
  }
  else{
    res.status(401).json({
      success: "false",
      message: "token not provided"
    })
    
  }
  
}

async function checkLogin(req, res){

  try{
    payload = req.body
    console.log(payload.password)

    // FIND THE ID OF THE CLIENT IN DATABASE, IF OK GENERATE JWT TOKEN, IF NOT SEND ERROR
    RegisUser.findOne({ where : { username: payload.username }})
    .then(async (user) => {

      const result = await bcrypt.compare(payload.password, user.password)
      .catch((err) => {
        console.log(err)
      })

      if (!result){
        return res.status(403).json({
          status: false,
          error: 'Username does not exist'
        })
      }
      else{
        const accessToken = generateAccessToken(payload.username, payload.id);
        user.loginStatus = 'Logged In';
        await user.save();
  
        //SET TIMEOUT FOR JWT TOKEN EXPIRY AFTER TOKEN GENERATED, RUN AFTER A CERTAIN TIME 
        setTimeout(async () => {
          // console.log('This code is run')
          user.loginStatus = 'Not Logged In';
          await user.save()
        }, jwtExpirationInSeconds * 1000)
  

        res.status(200).json({
          success: true,
          message: `Welcome ${user.firstname}`,
          token: accessToken
        })
      }
    })
    .catch(err => {
      console.log('Cannot find record')
    })
  }
  catch(err){
    res.status(500).json({
      success: false,
      message: 'An error occured',
      error: err.message
    })
  }

}


module.exports = {
  registerUser,
  userLogin,
  checkLogin
}

