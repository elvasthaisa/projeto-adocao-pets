const anjos = require("../models/anjos");
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

const getAllAngels = (req, res) => {
    anjos.find((err, allAngels) => {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(200).send(allAngels)
    })
}

const getAngelByName = (req, res) => {
    const name = req.query.name;
    
    if(name) {
        anjos.find({ nome: name }, { _id: 0 }, (err, anjo) => {
            if (err) {
                return res.status(404).send("Não existe anjo cadastrado com esse nome")
            } 
            return res.status(200).send(anjo)
        })
    }
}

const getAngelByPetType = (req, res) => {
    const petType = req.query.type;
    
    anjos.find({ tipoPet: petType }, { _id: 0 }, (err, anjo) => {
        if (err) {
            return res.status(404).send("Não existe anjo cadastrado com esse tipo de pet")
        } 
        return res.status(200).send(anjo)
    })
}

const createAngel = (req, res) => {
    authorization(req, res);

    const hashPassword = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = hashPassword;

    let anjo = new anjos(req.body)
    anjo.save((err, obj) => {
        if(err) {
            return res.status(424).send({ message: err.message })
        } else {
            return res.status(201).send(obj)
        }
    })
} 

const updateAngel = (req, res) => {
    authorization(req, res);

    const name = req.query.name;
    const email = req.query.email;

    anjos.find({nome: name, email: email}, (err, anjo) => {
        if(anjo.length > 0) {
            anjos.updateOne({ nome: name, email: email }, { $set: req.body }, (err) => {
                if (err) {
                    return res.status(424).send({ message: err.message })
                }
                return res.status(200).send('As informações do anjo foram alteradas')
            })
        } else {
            return res.status(200).send("Não há registros a serem atualizados para esse usuário")
        }
    })
}

const deleteAngel = (req, res) => {
    authorization(req, res);

    const name = req.query.name;
    const email = req.query.email;

    anjos.deleteOne({ nome: name, email: email }, (err) => {
        if (err) {
            return res.status(424).send({ message: err.message });
        }
        return res.status(200).send('As informações do anjo foram deletadas')
    })
}

const loginAngel = (req, res) => {
    anjos.findOne({ email: req.body.email }, (err, anjo) => {
        if (err) {
            return res.status(500).send({ message: error.message});
        }

        if (!anjo) {
        return res.status(404).send(`Não existe anjo com o email ${req.body.email}`)
        }

        const validPassword = bcrypt.compareSync(req.body.senha, anjo.senha);

        if (!validPassword) {
            return res.status(401).send('A senha está incorreta!')
        }

        const token = jwt.sign({ email: req.body.email }, SECRET);
        return res.status(200).send(token);
    })
}

module.exports = {
    getAllAngels,
    getAngelByName,
    getAngelByPetType,
    createAngel,
    updateAngel,
    deleteAngel,
    loginAngel
}