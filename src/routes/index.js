const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ 
        message: "Olá, seja bem-vindo(a) ao Projeto AnjoAumigo, projeto final feito por Thaísa Elvas como encerramento do bootcamp Back-End da Reprograma em parceria com o Porto Digital MINAS <3",
        version: "1.0.0"
     })
});

module.exports = router;