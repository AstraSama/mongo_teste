const Pen = require("../Models/pen_model.js");

const store = async (req, res) => {
    await Pen.create(req.body);
    res.status(201).json({ message: "Pen created successfully" });
}

const index = async (req, res) => {
    const content = await Pen.find(req.query).exec();
    res.status(200).json(content);
}

const show = async (req, res) => {
    const content = await Pen.findById(req.params.id).exec();
    res.status(200).json(content);
}

const update = async (req, res) => {
    await Pen.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.status(200).json({ message: "Pen updated successfully" });
}

const destroy = async (req, res) => {
    await Pen.findByIdAndRemove(req.params.id).exec();
    res.status(200).json({ message: "Pen deleted successfully" });
}

module.exportes = {
    store,
    index,
    show,
    update,
    destroy
}