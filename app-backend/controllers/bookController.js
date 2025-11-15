const db = require('../models/setup_db.js')

const Books = db.books

const addBook = async(req, res) => {
  console.log(req.body)
  let info =  {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    pubDate: req.body.pubDate,
    condition: req.body.condition,
  }
  try{
    const books = await Books.create(info)
    res.status(200).send(books)
  }
  catch(err){
    res.status(500).json({
      success:false,
      error: err.message
    })
  }
}

const getAllBooks = async (req, res) => {
  // console.log(`this is ${Books}`)

  let books = await Books.findAll({
    include: [db.categories, db.borrower]
  })
  res.status(200).send(books)

}

const getOneBook = async (req, res) => {

  let id = req.params.bookid
  // console.log(id)
  let books = await Books.findOne({ 
    where: {bookid : id },
    include: db.borrower
  })
  res.status(200).send(books)

}

const deleteBook = async (req, res) => {

  let paramId = req.params.bookid
  // console.log(paramId)
  await Books.destroy({
    where: {
      bookid: paramId,
    },
  },
  );
  res.status(200).json({
    sucess: true,
    message: 'Record deleted'
  })

}


const updateBook = async (req, res) => {


  try{
    let id = req.params.bookid

    const book = await Books.update(req.body, { where: { bookid: id }})
  
    res.status(200).send("record updated")
    
  }
  catch(err){
    res.status(500).json({
      success:false,
      error: err.message
    })
  }

 

}


module.exports = {
  addBook,
  getAllBooks,
  getOneBook,
  deleteBook,
  updateBook,
}