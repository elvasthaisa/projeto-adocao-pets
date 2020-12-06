const anjos = require('../models/anjos');

const getAll = (req, res) => {
    anjos.find(function(err, anjo) {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(200).send(anjo)
    })
}

const getAngelByName = (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    console.log(name)

    if(name) {
        anjos.find({nome: name, email: email}, { _id: 0 }, (err, anjo) => {
            if (err) {
                return res.status(404).send("Não existe anjo cadastrado com esse nome")
            } 
            return res.status(200).send(anjo)
        })
    }
}

const createAngel = (req, res) => {
    let anjo = new anjos(req.body)
    anjo.save(function (err, obj) {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(201).send(obj)
    })
} 

const updateAngel = (req, res) => {
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
            return res.status(200).send({ message: "Não há registros a serem atualizados para esse usuário"})
        }
    })
}

const deleteAngel = (req, res) => {
    const name = req.query.name;
    const email = req.query.email;

    anjos.deleteOne({ nome: name, email: email }, (err, anjo) => {
        if (err) {
            return res.status(424).send({ message: err.message });
        }
        return res.status(200).send('As informações do anjo foram deletadas')
    })
}

module.exports = {
    getAll,
    getAngelByName,
    createAngel,
    updateAngel,
    deleteAngel
}