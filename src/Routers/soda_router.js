const express = require("express");
const soda_controller = require("../Controllers/soda_controller.js");

const router = express.Router;

router.get("/", (req, res) => {
    res.json(soda_controller.index());  
});

router.get("/:id", (req, res) => {
    res.json(soda_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = soda_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = soda_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    soda_controller.destroy(req.params.id);
    res.status(204).json();
});

module.exports = router