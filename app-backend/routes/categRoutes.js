const categController = require('../controllers/categController')
const userLogin = require('../loginAuth/register.js')


const router = require('express').Router()

//PROTECTED ROUTES
// router.post('/addCateg', [userLogin.userLogin, categController.addCateg])

// router.get('/allCategs', [userLogin.userLogin, categController.getAllCategs])

// // router.get('/getSingleUser', categController.getOneUnit)

// //router.get('/addPublishedUsers', categController.getPublishedUser)

// router.get('/:name', [userLogin.userLogin, categController.getOneCateg])

// router.put('/:FKCategID', [userLogin.userLogin, categController.updateCateg])

// router.delete('/:FKCategID', [userLogin.userLogin, categController.deleteCateg])


//UNPROTECTED ROUTES
router.post('/addCateg', categController.addCateg)

router.get('/allCategs', categController.getAllCategs)

// router.get('/getSingleUser', categController.getOneUnit)

//router.get('/addPublishedUsers', categController.getPublishedUser)

router.get('/:name',  categController.getOneCateg)

router.put('/:FKCategID', categController.updateCateg)

router.delete('/:FKCategID', categController.deleteCateg)

module.exports = router