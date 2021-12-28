const Post = require("../models/Post")

const postsControllers = {
    newPost: (req, res) => {
        const {title, features, picture, status, location, date, number} = req.body
        let newPost = new Post({title, features, picture, status, owner: req.session.username, location, date, number})
        try {
            newPost.save()
            res.redirect('/profile')
        } catch(e) {
            console.log(e)
        }
    },
    editPost: (req, res) => {
        try {
            Post.findOneAndUpdate({_id: req.params.id}, {...req.body})
            res.redirect('/profile')
        } catch(e) {
            console.log(e)
        }
    },
    deletePost: async (req, res) => {
        console.log(req.params.id)
        try {
            await Post.findOneAndDelete( {_id: req.params.id} )
            res.redirect('/profile')
        } catch(e) {
            console.log(e)
        }
    },
}

module.exports = postsControllers