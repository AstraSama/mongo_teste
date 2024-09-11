const db = require("../Routers/db.js");

const Schema = db.Schema;

const airport_Schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco_cep: {
        type: Number,
        required: true
    }
});

const Airport = db.model("Airport", airport_Schema);

module.exports = Airport;