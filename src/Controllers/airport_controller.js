const Airport = require("../Models/airport_model.js");

const store = async (req, res) => {
    await Airport.create(req.body);
    res.status(201).json({ message: "Airport created successfully" });
}

const index = async (req, res) => {
    const content = await Airport.find(req.query).exec();
    res.status(200).json(content);
}

const show = async (req, res) => {
    const content = await Airport.findById(req.params.id).exec();
    res.status(200).json(content);
}

const update = async (req, res) => {
    await Airport.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.status(200).json({ message: "Airport updated successfully" });
}

const destroy = async (req, res) => {
    await Airport.findByIdAndRemove(req.params.id).exec();
    res.status(200).json({ message: "Airport deleted successfully" });
}

module.exportes = {
    store,
    index,
    show,
    update,
    destroy
}