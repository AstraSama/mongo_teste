const db = require("../Routers/db.js");
const {Schema} = require("mongoose");

const Schema = db.Schema;

const pen_Schema = new Schema({
    cor: {
        type: String,
        required: true
    },
    eh_bic: {
        type: Boolean,
        required: true
    }
});

const Pen = db.model("Pen", pen_Schema);

module.exports = Pen;