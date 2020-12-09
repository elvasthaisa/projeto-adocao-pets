const pets = require('../models/pets');

const getAllPets = (req, res) => {
    pets.find(function(err, pet) {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(200).send(pet)
    })
}

const getPetByName = (req, res) => {
    const petName = req.query.name;
    const tutorName = req.query.tutor;

    const validateName = pets.find({ nome: petName });
    const validateTutor = pets.find({ tutorTemporario: tutorName });

    if (!validateName) {
        return res.status(404).send("Não existe pet cadastrado com esse nome")
    } 

    if (!validateTutor) {
        return res.status(404).send("Não existe pet cadastrado com esse tutor cadastrado")
    }  

    if (validateName && validateTutor) {
        pets.find({ nome: petName, tutorTemporario: tutorName}, { _id: 0 }, (err, pet) => {
            if (err) {
                return res.status(424).send("Falha ao buscar o pet")
            } else {
                return res.status(200).send(pet)
            }
        })
    } 
}

const createPet = (req, res) => {
    const pet = new pets(req.body);
    console.log(pet)
    
    pet.save((err) => {
        if (err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(201).send("Um novo pet foi adicionado!")
    })
}

const updatePet = (req, res) => {
    const petName = req.query.name;
    const tutorName = req.query.tutor; 

    pets.find({ nome: petName, tutorTemporario: tutorName}, (err, pet) => {
        if (pet.length > 0) {
            pets.updateOne({ nome: petName, tutorTemporario: tutorName }, { $set: req.body }, (err) => {
                if (err) {
                    return res.status(424).send({ message: err.message })
                }
                return res.status(200).send('As informações do pet foram alteradas')
            })
        }
        return res.status(200).send("Não há registros a serem atualizados para esse usuário") 
    })
}

const deletePet = (req, res) => {
    const petName = req.query.name;
    const tutorName = req.query.tutor;

    pets.deleteOne({ nome: petName, tutorTemporario: tutorName }, (err, pet) => {
        if (err) {
            return res.status(424).send({ message: err.message });
        }
        return res.status(200).send('As informações do pet foram deletadas');
    })
}

module.exports = {
    getAllPets,
    getPetByName,
    createPet,
    updatePet,
    deletePet
}