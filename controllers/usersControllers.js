const User = require('../models/User')

const usersControllers = {
    signUp: async (req, res) => {
        const {firstname, lastname, email, password, username, picture} = req.body
        try {
            let usernameExist = await User.findOne({username})
            let emailExist = await User.findOne({email})
            if(!usernameExist && !emailExist) {
                await new User({firstname, lastname, email, password, username, picture}).save()
                req.session.loggedIn = true
                req.session.username = username
                return res.redirect('/profile')
            } 
        } catch(e) {
            console.log(e)
            res.redirect('/signup')
        }
    },
    signIn: async (req, res) => {
        const {Username, Password} = req.body
        try {
            let user = await User.findOne({username: Username})
            if((user.username === Username) && (user.password === Password)) {
                req.session.loggedIn = true
                req.session.username = user.username
                res.redirect('/profile')
            } else {
                res.redirect('/')
            }
        } catch(e) {
            console.log(e)
        }
    },
    signOut: (req, res) => {
        req.session.destroy(() => {
            res.redirect('/')
        })
    }
}


module.exports = usersControllers