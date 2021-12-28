const express = require('express')
const passport = require('passport')
const router = express.Router()

const usersControllers = require('../controllers/usersControllers')
const viewsControllers = require('../controllers/viewsControllers')
const petsControllers = require('../controllers/petsControllers')
const postsControllers = require('../controllers/postsControllers')

router.route('/').get(viewsControllers.home)

router.route('/found-pets').get(viewsControllers.foundPets)

router.route('/profile').get(viewsControllers.profile)

router.route('/register').get(viewsControllers.register)

router.route('/form-pet').get(viewsControllers.formPet)

router.route('/form-ad').get(viewsControllers.formAd)

router.route('/signup').get(viewsControllers.register)

//// POSTS

router.route('/posts')
    .post(postsControllers.newPost)

router.route('/edit-post/:id')
    .post(postsControllers.editPost)

router.route('/delete-post/:id')
    .get(postsControllers.deletePost)

////// petss

router.route('/pets')
    .post(petsControllers.newPet)

router.route('/edit-pet/:id')
    .post(petsControllers.editPet)

router.route('/delete-pet/:id')
    .get(petsControllers.deletePet)

//// AUTH 

router.route('/user/signup')
    .post(usersControllers.signUp)

router.route('/user/signin')
    .post(usersControllers.signIn)

router.route('/user/signout')
    .get(usersControllers.signOut)
 
module.exports = router
