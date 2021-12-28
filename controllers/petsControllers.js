const Pet = require("../models/Pet")

const petsControllers = {
    newPet: async (req, res) => {
        const {firstname, breed, picture, age} = req.body
        try {
            let newPet = await new Pet({firstname, breed, picture, age, owner: req.session.username})
            newPet.save()
            res.redirect('/profile')
        } catch(e) {
            console.log(e)
        }
    },
    editPet: (req, res) => {
        try {
          Pet.findOneAndUpdate({_id: req.params.id}, {...req.body})
          res.redirect('/profile')
        } catch(e) {
            console.log(e)
        }
    },
    deletePet: async (req, res) => {
        try {
            await Pet.findOneAndDelete( {_id: req.params.id} )
            res.redirect('/profile')
        } catch(e) {
            console.log(e)
        }
    },
}

module.exports = petsControllers