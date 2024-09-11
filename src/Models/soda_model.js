const db = require("../Routers/db.js");
const {Schema} = require("mongoose");

const Schema = db.Schema;

const soda_Schema = new Schema({
    porcentagem_suco: {
        type: Number,
        required: true
    },
    kcal_200: {
        type: Number,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    tamanho_ml: {
        type: Number,
        required: true
    }
});

const Soda = db.model("Soda", soda_Schema);

module.exports = Soda;