const db = require('../models/setup_db.js')
const { encryptPswd } = require('../helper/encryptPassword.js')

const RegisUser = db.regisUser

const addRegisUser = async (payload, req, res) => {

  // console.log(`body is ${payload}`)
  let info =  {
    id : payload.id,
    username: payload.username,
    email: payload.email,
    password: payload.password,
    age: payload.age,
    role: payload.role,
    firstname: payload.firstname, 
    lastname: payload.lastname,
    status: payload.status,
    loginStatus: payload.loginStatus
  }
  console.log(info)

  try{
    const regisUser = await RegisUser.create(info)
    return regisUser
    // res.status(200).send(regisUser)
  }
  catch(err){
    console.log(err)
  }


}

const getAllRegisUser = async (req, res) => {
  // console.log(`this is ${regisUser}`)
  let queryIden = await RegisUser.findOne({ where: { username : req.body.username }})

  if (queryIden.role === "admin"){
    let regisUser = await RegisUser.findAll({})
    // console.log(regisUser)
    res.status(200).send(JSON.stringify(regisUser))
  }
  else{
    return res.status(403).json({
      success: false,
      error: "Not authorized"
    })
  }

  

}

const getOneRegisUser = async (req, res) => {

  let id = req.params.id
  // console.log(id)
  let queryIden = await RegisUser.findOne({
     where: { 
      id : req.body.id
    }
  })
  
  
  if (queryIden.role === 'admin'){
    let regisUser = await RegisUser.findOne({ where: { id : id }})
    res.status(200).send(regisUser)
  }
  else{
    return res.status(403).json({
      success: false,
      error: "Not authorized"      
    })
  } 
}

const deleteRegisUser = async (req, res) => {

  let paramId = req.params.id
  // console.log(paramId)
  let queryIden = await RegisUser.findOne({ where: { id : req.body.id }})

  if (queryIden.role === 'admin'){
    await RegisUser.destroy({
      where: {
        id: paramId,
      },
    },
    );
    res.status(200).send('record deleted')
  }
  else{
    return res.status(403).json({
      success: false,
      error: "Not authorized"   
    })
  }


}


const updateRegisUser = async (req, res) => {

  let id = req.params.id
  let queryIden = await RegisUser.findOne({ where: { id : req.body.id }})

  if (queryIden.role === 'admin'){
    await RegisUser.update(req.body.changed, { where: { id: id }})

    res.status(200).send("record updated")
  }
  else{
    return res.status(403).json({
      success: false,
      error: "Not authorized"   
    })   
  }
}


const changePswd = async (req, res) => {

  let queryIden = await RegisUser.findOne({ where: { id : req.body.id }})

  if (queryIden.role === 'admin'){
    let targetRecord = await RegisUser.findOne({ where: { id : req.body.changed.id }})
    
    targetRecord.password = await encryptPswd(req.body.changed.password);
    console.log(targetRecord.password)

    await targetRecord.save()
    .then(res.status(200).json({
      success: true,
      message: "record updated"
    }))
    .catch( (err) => {
      res.send(err)
    }) 
  }
  else{
    return res.status(403).json({
      success: false,
      error: "Not authorized"   
    })   
  }
}


const changeRole = async (req, res) => {

  let queryIden = await RegisUser.findOne({ where: { id : req.body.id }})

  if (queryIden.role === 'admin'){
    let targetRecord = await RegisUser.findOne({ where: { id : req.body.changed.id }})
    
    targetRecord.role = req.body.changed.role

    await targetRecord.save()
    .then(res.status(200).json({
      success: true,
      message: "record updated"
    }))
    .catch( (err) => {
      res.send(err)
    })
  }
  else{
    return res.status(403).json({
      success: false,
      error: "Not authorized"   
    })   
  }
}


const changeStatus = async (req, res) => {

  let queryIden = await RegisUser.findOne({ where: { id : req.body.id }})

  if (queryIden.role === 'admin'){
    let targetRecord = await RegisUser.findOne({ where: { id : req.body.changed.id }})
    
    targetRecord.status = req.body.changed.status

    await targetRecord.save()
    .then(res.status(200).json({
      success: true,
      message: "record updated"
    }))
    .catch( (err) => {
      res.send(err)
    })

  
    
  }
  else{
    return res.status(403).json({
      success: false,
      error: "Not authorized"   
    })   
  }

  
}


module.exports = {
  addRegisUser,
  getAllRegisUser,
  getOneRegisUser,
  deleteRegisUser,
  updateRegisUser,
  changePswd,
  changeRole,
  changeStatus
}
