const mongoose = require("mongoose");

const mongo_db = "mongodb+srv://AstraSama:13168534978@clusterpratica1.ran3a.mongodb.net/";

async function main() {
    await mongoose.connect(mongo_db);
    
}

main()
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log(err));

module.exports = mongoose
