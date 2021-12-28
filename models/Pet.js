const mongoose = require('mongoose')
  
const petSchema = new mongoose.Schema({
      firstname: {type: String, required: true},
      breed: {type: String, required: true},
      status: {type: String},
      features: {type: String},
      age: {type: String, required: true},
      picture: {type: String, required: true},
      owner: {type: String, required: true}
  })
  
  const Pet = mongoose.model('pet', petSchema)
  
module.exports = Pet