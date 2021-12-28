const Post = require("../models/Post")
const Pet = require("../models/Pet")
const User = require("../models/User")

const viewsControllers = {
    home: async (req, res) => {
        let posts = await Post.find({status: "Searching my pet"})
        res.render('index', {
            title: 'FindMyPet | Searched Pets',
            posts: posts,
            loggedIn: req.session.loggedIn,
        })
    },
    foundPets: async (req, res) => {
        let posts = await Post.find({status: "Found a someone's pet"})
        res.render('found-pets', {
            title: 'FindMyPet | Found Pets',
            posts: posts,
            loggedIn: req.session.loggedIn,
        })
    },
    profile: async  (req, res) => {
        let username = req.session.username
        let user = await User.findOne({username})
        if(req.session.loggedIn) {
            let userPosts = await Post.find({owner: username})
            let userPets = await Pet.find({owner: username})
            res.render('profile', {
                title: 'Profile | FindMyPet',
                posts: userPosts,
                pets: userPets,
                loggedIn: req.session.loggedIn,
                firstname: user.firstname,
                lastname: user.lastname,
                picture: user.picture || '',                
                about: user.about || '',
                username: req.session.username,
                status: user.status
        })
        }
    },
    register: (req, res) => {
        if(!req.session.loggedIn){
            res.render('register', {
                title: 'Sign Up | FindMyPet',
                loggedIn: req.session.loggedIn,
                
            })
        }
    },
    formPet: (req, res) => {
        res.render('form-pet', {
            title: 'Add pet | FindMyPet',
            loggedIn: req.session.loggedIn,
            
        })
    },
    formAd: (req, res) => {
        res.render('form-post', {
            title: 'Create post | FindMyPet',
            loggedIn: req.session.loggedIn,
            
        })
    },
}


module.exports = viewsControllers