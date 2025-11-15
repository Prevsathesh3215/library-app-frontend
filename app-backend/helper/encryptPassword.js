const bcrypt = require('bcrypt')


let encryptPswd = async (payloadPassword) => {
  console.log(payloadPassword)
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(payloadPassword, saltRounds);
  return hashedPassword;
}

// password = '78412521685'
// encryptPswd(password).then((password) => {
//   console.log(password)
// })


module.exports =  {
  encryptPswd
}