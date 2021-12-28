const mongoose = require('mongoose')
  
const postSchema = new mongoose.Schema({
      title: {type: String, required: true},
      features: {type: String, required: true},
      status: {type: String, required: true},
      picture: {type: String, required: true},
      location: {type: String, required: true},
      date: {type: String, required: true},
      number: {type: Number, required: true},
      owner: {type: String, required: true},
  })
  
  const Post = mongoose.model('post', postSchema)
  
module.exports = Post