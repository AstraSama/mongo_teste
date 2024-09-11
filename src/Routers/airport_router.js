const endereco_cep = require("../Middlewares/endereco_cep.js");

const express = require("express");
const airport_controller = require("../Controllers/airport_controller.js");

const router = express.Router;

router.get("/", (req, res) => {
    res.json(airport_controller.index());  
});

router.get("/:id", (req, res) => {
    res.json(airport_controller.show(req.params.id));
});

router.post("/", endereco_cep, (req, res) => {
    const code = airport_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", endereco_cep, (req, res) => {
    const code = airport_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    airport_controller.destroy(req.params.id);
    res.status(204).json();
});

module.exports = router