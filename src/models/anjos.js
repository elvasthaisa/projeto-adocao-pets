const mongoose = require('mongoose');

const anjosSchema = new mongoose.Schema({
    nome : { type: String, required: true },
    dataNascimento: { type: String, required: true },
    email : { type: String, required: true },
    telefone : { type: String },
    endereco : { type: String },
    porte : { type: String },
    raca : { type: String },
    pelagem : { type: String },
    tipoPet : { type: Number }
}, {
    versionKey: false,
})

const anjos = mongoose.model('anjos', anjosSchema);

module.exports = anjos;