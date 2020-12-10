const pets = require('../models/pets');

const getAllPets = (req, res) => {
    pets.find((err, allPets) => {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(200).send(allPets)
    })
}

const getPetByName = (req, res) => {
    const petName = req.query.name;
    const tutorName = req.query.tutor;

    const invalidateName = pets.find({ nome: petName }, { $not: {is_agent: {$eq: true}}});
    const invalidateTutor = pets.find({ tutorTemporario: tutorName }, { $not: {is_agent: {$eq: true}}});

    const typeName = typeof invalidateName;
    const typeTutor = typeof invalidateTutor;

    if (typeName == "object") {
        console.log("não existe pet")
        return res.status(404).send("Não existe pet cadastrado com esse nome")
    } 

    if (typeTutor == "object") {
        console.log("não existe tutor")
        return res.status(404).send("Não existe pet cadastrado com esse tutor cadastrado")
    }  

    if (!invalidateName && !invalidateTutor) {
        console.log("nome do pet e tutor validos")
        pets.find({ nome: petName, tutorTemporario: tutorName}, { _id: 0 }, (err, pet) => {
            if (err) {
                return res.status(424).send("Falha ao buscar o pet")
            } else {
                return res.status(200).send(pet)
            }
        })
    } 
}

const getPetBySex = (req, res) => {
    const sex = req.query.sexo;

    pets.find({ sexo: sex }, { _id: 0 }, (err, pet) => {
        if (err) {
            return res.status(424).send("Falha ao buscar o sexo do pet")
        } 
        return res.status(200).send(pet)
    })
}

const getPetBySize = (req, res) => {
    const size = req.query.porte;

    pets.find({ porte: size }, { _id: 0 }, (err, pet) => {
        if (err) {
            return res.status(424).send("Falha ao buscar o porte do pet")
        } 
        return res.status(200).send(pet)
    })
}

const getPetByType = (req, res) => {
    const type = req.query.type;

    pets.find({ tipoPet: type }, { _id: 0 }, (err, pet) => {
        if (pet.length > 0) {
            if (err) {
                return res.status(424).send("Falha ao buscar o tipo do pet")
            } 
            return res.status(200).send(pet)
        }
    });
}

const createPet = (req, res) => {
    const pet = new pets(req.body);
    
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
                return res.status(200).send('Não há registros a serem atualizados para esse usuário')
            })
        }
        return res.status(200).send("As informações do pet foram alteradas") 
    })
}

const deletePet = (req, res) => {
    const petName = req.query.name;
    const tutorName = req.query.tutor;

    pets.deleteOne({ nome: petName, tutorTemporario: tutorName }, (err) => {
        if (err) {
            return res.status(424).send({ message: err.message });
        }
        return res.status(200).send('As informações do pet foram deletadas');
    })
}

module.exports = {
    getAllPets,
    getPetByName,
    getPetBySex,
    getPetBySize, 
    getPetByType,
    createPet,
    updatePet,
    deletePet,
}