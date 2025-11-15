const booksController = require('../controllers/bookController.js')
const userLogin = require('../loginAuth/register.js')


const router = require('express').Router()

//PROTECTED ROUTES
// router.post('/addBook', [userLogin.userLogin, booksController.addBook])

// router.get('/allBooks', [userLogin.userLogin, booksController.getAllBooks])

// // router.get('/getSingleUser', booksController.getOneUnit)

// //router.get('/addPublishedUsers', booksController.getPublishedUser)

// router.get('/:bookid', [userLogin.userLogin, booksController.getOneBook])

// router.put('/:bookid', [userLogin.userLogin, booksController.updateBook])

// router.delete('/:bookid', [userLogin.userLogin, booksController.deleteBook])


//UNPROTECTED ROUTES
router.post('/addBook', booksController.addBook)

router.get('/allBooks', booksController.getAllBooks)

// router.get('/getSingleUser', booksController.getOneUnit)

//router.get('/addPublishedUsers', booksController.getPublishedUser)

router.get('/:bookid', booksController.getOneBook)

router.put('/:bookid', booksController.updateBook)

router.delete('/:bookid', booksController.deleteBook)

module.exports = router