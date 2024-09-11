const express = require("express");
const motorcycle_controller = require("../Controllers/motorcycle_controller.js");

const router = express.Router;

router.get("/", (req, res) => {
    res.json(motorcycle_controller.index());  
});

router.get("/:id", (req, res) => {
    res.json(motorcycle_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = motorcycle_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = motorcycle_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    motorcycle_controller.destroy(req.params.id);
    res.status(204).json();
});

module.exports = router