const express = require("express");
const pen_controller = require("../Controllers/pen_controller.js");

const router = express.Router;

router.get("/", (req, res) => {
    res.json(pen_controller.index());  
});

router.get("/:id", (req, res) => {
    res.json(pen_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = pen_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = pen_controller.update(req.params.id, req.body);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    pen_controller.destroy(req.params.id);
    res.status(204).json();
});

module.exports = router