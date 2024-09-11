const Soda = require("../Models/soda_model.js");

const store = async (req, res) => {
    await Soda.create(req.body);
    res.status(201).json({ message: "Soda created successfully" });
}

const index = async (req, res) => {
    const content = await Soda.find(req.query).exec();
    res.status(200).json(content);
}

const show = async (req, res) => {
    const content = await Soda.findById(req.params.id).exec();
    res.status(200).json(content);
}

const update = async (req, res) => {
    await Soda.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.status(200).json({ message: "Soda updated successfully" });
}

const destroy = async (req, res) => {
    await Soda.findByIdAndRemove(req.params.id).exec();
    res.status(200).json({ message: "Soda deleted successfully" });
}

module.exportes = {
    store,
    index,
    show,
    update,
    destroy
}