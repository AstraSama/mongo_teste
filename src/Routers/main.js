const express = require("express");
const app = express();
const port = 3000;

const airport_router = require("./airport_router.js");
const pen_router = require("./pen_router.js");
const motorcycle_router = require("./motorcycle_router.js");
const soda_router = require("./soda_router.js");

const endereco_cep = require("../Middlewares/endereco_cep.js")

app.use(express.json());

app.use(endereco_cep)

app.use("/airport", airport_router);
app.use("/pen", pen_router);
app.use("/motorcycle", motorcycle_router);
app.use("/soda", soda_router);

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})