const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    tipoPet : { type: String, required: true },
    nome : { type: String, required: true },
    idade : { type: String, required: true },
    porte : { type: String },
    sexo : { type: String },
    cor : { type: String },
    raca : { type: String },
    pelagem : { type: String },
    tutorTemporario : { type: String, required: true },
    emailTutor : { type: String, required: true },
    senha : { type: String, required: true },
    telefoneTutor : { type: String, required: true },
    enderecoTutor : { type: String, required: true }
}, {
    versionKey: false,
})

const pets = mongoose.model('pets', petsSchema);

module.exports = pets;