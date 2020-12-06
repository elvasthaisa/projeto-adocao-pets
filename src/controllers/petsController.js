const pets = require('../models/pets');

const getAllPets = (req, res) => {
    pets.find(function(err, pet) {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(200).send(pet)
    })
}

module.exports = {
    getAllPets
}