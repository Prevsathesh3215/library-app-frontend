const borrowerController = require('../controllers/borrowerController.js')
const userLogin = require('../loginAuth/register.js')

const router = require('express').Router()

//PROTECTED ROUTES
// router.post('/addBorrower', [userLogin.userLogin, borrowerController.addBorrower])

// router.get('/allBorrowers', [userLogin.userLogin, borrowerController.getAllBorrowers])

// // router.get('/getSingleUser', borrowerController.getOneUnit)

// //router.get('/addPublishedUsers', borrowerController.getPublishedUser)

// router.get('/:PKborrowerID', [userLogin.userLogin, borrowerController.getOneBorrower])

// router.put('/:PKborrowerID', [userLogin.userLogin, borrowerController.updateBorrower])

// router.delete('/:PKborrowerID', [userLogin.userLogin, borrowerController.deleteBorrower])


//UNPROTECTED ROUTES
router.post('/addBorrower', borrowerController.addBorrower)

router.get('/allBorrowers', borrowerController.getAllBorrowers)

// router.get('/getSingleUser', borrowerController.getOneUnit)

//router.get('/addPublishedUsers', borrowerController.getPublishedUser)

router.get('/:PKborrowerID', borrowerController.getOneBorrower)

router.put('/:PKborrowerID', borrowerController.updateBorrower)

router.delete('/:PKborrowerID', borrowerController.deleteBorrower)

module.exports = router