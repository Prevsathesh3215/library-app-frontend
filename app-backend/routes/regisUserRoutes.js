const regisUserController = require('../controllers/regisUserController')
const userLogin = require('../loginAuth/register.js')



const router = require('express').Router()


router.post('/register', userLogin.registerUser)

router.post('/login', userLogin.checkLogin)

router.post('/allUsers', [userLogin.userLogin, regisUserController.getAllRegisUser])

router.put('/changePassword', [userLogin.userLogin, regisUserController.changePswd])

router.put('/changeRole', [userLogin.userLogin, regisUserController.changeRole])

router.put('/changeStatus', [userLogin.userLogin, regisUserController.changeStatus])

// router.get('/getSingleUser', regisUserController.getOneRegisUser)

//router.get('/addPublishedUsers', regisUserController.getPublishedUser)

router.get('/:id', [userLogin.userLogin, regisUserController.getOneRegisUser])

router.put('/:id', [userLogin.userLogin, regisUserController.updateRegisUser])

router.delete('/:id', [userLogin.userLogin, regisUserController.deleteRegisUser])

module.exports = router