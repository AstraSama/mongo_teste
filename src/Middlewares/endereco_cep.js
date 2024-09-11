const axios = require("axios");

const endereco_cep = (req, res, next) => {
    req.body.cep = req.body.cep.replaceAll(".", "").replaceAll("-", "");

    if(
        req.body.cep.length == 8 &&
        !isNaN(req.body.cep)
    ) {
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
            .then(response => {
                delete req.body.cep;

                req.body.endereco = res.data;

                next()

            })
    } else {
        return res.status(400).json({ message: "CEP inválido" });
    }
}

module.exports = endereco_cep;