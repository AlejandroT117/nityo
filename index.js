const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8080;
const setHdb = require("./engine");

const homeRouter = require("./routes/home");

const tiendasModel = require('./models/tiendas');

(async () => {
  try {
    /* load data from json to mongodb */
    //tiendasModel.loadData("../ExamenTiendas.json")
    
    await mongoose.connect("mongodb://localhost:27017/examenNityo");
    setHdb(app)

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/", homeRouter);

    app.listen(PORT, () => console.log(`Escuchando http://localhost:${PORT}`))
  
  } catch (e) {
    console.log(`Error de conexión: ${e}`)
  }
})();
