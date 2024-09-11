const db = require("../Routers/db.js");
const {Schema} = require("mongoose");

const Schema = db.Schema;

const motorcycle_Schema = new Schema({
    marca: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cilindrada: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    }
});

const Motorcycle = db.model("Motorcycle", motorcycle_Schema);

module.exports = Motorcycle;