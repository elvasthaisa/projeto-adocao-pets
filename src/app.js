const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost:27017/projeto-final", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  });

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function () {
    console.log("conexão feita com sucesso.")
})

const anjos = require("./routes/anjosRoute");

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin", "X-Requested-With", "Content-Type", "Accept")
    next();
})

app.use('/anjos', anjos);

module.exports = app;