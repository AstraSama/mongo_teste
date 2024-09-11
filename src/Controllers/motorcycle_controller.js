const Motorcycle = require("../Models/motorcycle_model.js");

const store = async (req, res) => {
    await Motorcycle.create(req.body);
    res.status(201).json({ message: "Motorcycle created successfully" });
}

const index = async (req, res) => {
    const content = await Motorcycle.find(req.query).exec();
    res.status(200).json(content);
}

const show = async (req, res) => {
    const content = await Motorcycle.findById(req.params.id).exec();
    res.status(200).json(content);
}

const update = async (req, res) => {
    await Motorcycle.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.status(200).json({ message: "Motorcycle updated successfully" });
}

const destroy = async (req, res) => {
    await Motorcycle.findByIdAndRemove(req.params.id).exec();
    res.status(200).json({ message: "Motorcycle deleted successfully" });
}

module.exportes = {
    store,
    index,
    show,
    update,
    destroy
}