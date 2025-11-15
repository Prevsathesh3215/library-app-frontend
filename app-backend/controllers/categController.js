const db = require('../models/setup_db.js')

const Categories = db.categories

const addCateg = async(req, res) => {
  let info =  {
    name: req.body.name,
    description: req.body.description
  }

  const categories = await Categories.create(info)
  res.status(200).send(categories)
}

const getAllCategs = async (req, res) => {
  // console.log(`this is ${Books}`)

  await Categories.restore() //restores soft deleted rows
  let categ = await Categories.findAll({})
  res.status(200).send(categ)

}

const getOneCateg= async (req, res) => {

  // let FKCategID = req.params.FKCategID
  // // console.log(id)
  // let categs = await Categories.findOne({ where: {FKCategID : FKCategID }})
  // res.status(200).send(categs)

  let name = req.params.name

  const categs = await Categories.findOne({
     where:  { name : name },
     include: db.books,
    })

  res.status(200).send(categs)

}

const deleteCateg = async (req, res) => {

  let paramId = req.params.FKCategID
  // console.log(paramId)
  await Categories.destroy({
    where: {
      FKCategID: paramId,
    },
  },
  );
  res.status(200).json({
    success: true,
    message: 'Record deleted'
  })

}


const updateCateg = async (req, res) => {

  try{

    let id = req.params.FKCategID;

    const categ = await Categories.update(req.body, { where: { FKCategID: id }});
  
    res.status(200).json({
      success: true,
      message: 'Record updated!'
    });

  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    });
  }


 

}


module.exports = {
  addCateg,
  getAllCategs,
  getOneCateg,
  deleteCateg,
  updateCateg,
}