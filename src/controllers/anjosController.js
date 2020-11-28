const anjos = require('../models/anjos');

const readAll = (req, res) => {
    anjos.find(function(err, anjo) {
        if(err) {
            return res.status(424).send({ message: err.message })
        }
        return res.status(200).send(anjo)
    })
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

module.exports = {
    readAll,
    createAngel
}