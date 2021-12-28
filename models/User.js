const mongoose = require('mongoose')
  
const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true},
    picture: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    status: {type: String},
    about: String,
    posts: {
        type: [{postId: {type: mongoose.Types.ObjectId, ref: 'post'}}],
        default: []
    },
    pets: {
        type: [{petId: {type: mongoose.Types.ObjectId, ref: 'pet'}}],
        default: []
    },
})

const User = mongoose.model('user', userSchema)
  
module.exports = User