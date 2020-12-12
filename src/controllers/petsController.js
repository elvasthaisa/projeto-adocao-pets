const pets = require('../models/pets');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authorization = (req, res) => {
    const authHeader = req.get("authorization");

    if (!authHeader) {
        return res.status(401).send("Você tem autorização?");
    }

    const token = authHeader.split(" ")[1];
  
    jwt.verify(token, SECRET, (err) => {
        if (err) {
            return res.status(403).send("Você não tem autorização para executar essa ação");
        }
    });
};

const getAllPets = (req, res) => {
    pets.find((err, allPets) => {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(200).send(allPets)
    })
}

const getPetByName = async (req, res) => {
    const petName = req.query.name;
    const tutorName = req.query.tutor;

    const validateName = await pets.find({ nome: petName });
    const validateTutor = await pets.find({ tutorTemporario: tutorName });

    if (!validateName || validateName.length < 1) {
        return res.status(404).send("Não existe pet cadastrado com esse nome")
    }

    if (!validateTutor || validateTutor.length < 1) {
        return res.status(404).send("Não existe pet cadastrado para esse tutor")
    }
    
    if (validateName && validateTutor) {
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
    authorization(req, res);

    const hashPassword = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = hashPassword;

    const pet = new pets(req.body);
    pet.save((err) => {
        if (err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(201).send("Um novo pet foi adicionado!")
    })
}

const updatePet = (req, res) => {
    authorization(req, res);

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
    authorization(req, res);

    const petName = req.query.name;
    const tutorName = req.query.tutor;

    pets.deleteOne({ nome: petName, tutorTemporario: tutorName }, (err) => {
        if (err) {
            return res.status(424).send({ message: err.message });
        }
        return res.status(200).send('As informações do pet foram deletadas');
    })
}

const loginPet = (req, res) => {
    anjos.findOne({ emailTutor: req.body.email }, (err, pet) => {
        if (err) {
            return res.status(500).send({ message: error.message });
        }

        if (!pet) {
        return res.status(404).send(`Não existe pet cadastrado para o email ${req.body.email}`)
        }

        const validPassword = bcrypt.compareSync(req.body.senha, pet.senha);

        if (!validPassword) {
            return res.status(401).send('A senha está incorreta!')
        }

        const token = jwt.sign({ emailTutor: req.body.email }, SECRET);
        return res.status(200).send(token);
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
    loginPet
}