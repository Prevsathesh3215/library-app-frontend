const db = require('../models/setup_db.js')
const date = require('date-and-time')

const Borrower = db.borrower

const addBorrower = async(req, res) => {

  let now = new Date();
  let oneWeek = date.addDays(now, 7);

  now = date.format(now, 'YYYY-MM-DD');
  oneWeek = date.format(oneWeek, 'YYYY-MM-DD')

  // console.log(now)


  let info =  {
    bookId : req.body.bookId,
    name: req.body.name,
    contactInfo: req.body.contactInfo,
    checkoutDate: now,
    dueDate: oneWeek,
    returnDate: req.body.returnDate,
  }
  try{
    const borrower = await Borrower.create(info)
    res.status(200).send(borrower)
  }
  catch(err){
    res.status(401).json({
      success:false,
      error: err.message
    })
  }
}

const getAllBorrowers = async (req, res) => {
  // console.log(`this is ${Books}`)

  try{
    let borrow = await Borrower.findAll({})
    res.status(200).send(borrow)
  
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }

}

const getOneBorrower = async (req, res) => {

  try{
    
    let PKborrowerID = req.params.PKborrowerID
    // console.log(id)
    let borrower = await Borrower.findOne({ where: {PKborrowerID : PKborrowerID }})
    res.status(200).send(borrower)
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }


}

const deleteBorrower = async (req, res) => {

  let paramId = req.params.PKborrowerID
  // console.log(paramId)
  await Borrower.destroy({
    where: {
      PKborrowerID: paramId,
    },
  })
  .then(() => {
    res.status(200).json({
      success: true,
      message: "Record deleted."
    })
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      error: err.message 
    })
  })

}


const updateBorrower = async (req, res) => {

  try{
    let PKborrowerID = req.params.PKborrowerID
    console.log(PKborrowerID)
  
    const borrower = await Borrower.update(req.body, { where: { PKborrowerID: PKborrowerID }})
  
    res.status(200).json({
      success:true, 
      message: 'Record updated!'
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      error: err.message
    })
  }
}


module.exports = {
  addBorrower,
  getAllBorrowers,
  getOneBorrower,
  deleteBorrower,
  updateBorrower,
}