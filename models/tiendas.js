const mongoose = require("mongoose");
const fs = require("fs").promises;
const path = require("path");

class Contenedor {
  constructor() {
    const schema = new mongoose.Schema({
      categoria: {
        nombre: String,
        subcategorias: [{ nombre: String }],
      },
      direccion: {
        colonia: String,
        numeroExterior: String,
        entidadFederativa: String,
        municipio: String,
        calle: String,
        codigoPostal: String,
      },
      nombrePropietario: String,
      nombreTienda: String,
      fechaHoraAlta: Date,
    });

    this.model = mongoose.model("tienda", schema);
  }

  async loadData(filename) {
    try {
      const raw = await fs.readFile(path.join(__dirname, filename), "utf-8");
      const tiendas = JSON.parse(raw);
      let i = 0;
      for (const t of tiendas) {
        console.log(t);
        await this.model.create(t);
        i++;
      }

      console.log("data cargada en db");
      return i;
    } catch (e) {
      console.log(`Error cargando datos: ${e}`);
    }
  }

  async getNumByCat(cat = "") {
    try {
      let config = []
      if(cat){
        config = [
          {
            $match: { "categoria.nombre": cat }
          },
          {
            $group: { "_id": "$categoria.nombre", count: { $sum: 1 } },
          },
          {
            $sort: { count: -1, _id: 1 },
          },
        ]
      }else{
        config = [
          {
            $group: { "_id": "$categoria.nombre", count: { $sum: 1 } },
          },
          {
            $sort: { count: -1, _id: 1 },
          },
        ]
      }
      const nByCat = await this.model.aggregate(config);
      console.log(`Obteniendo n por Categoría`)
      return nByCat
    } catch (e) {
      console.log(`Error obteniendo n por categoría`);
    }
  }

  async shopsGtOneCat(){
    try{
      //const shops = this.model.find({"categoria.subcategorias": {$size: 1}})
      const shops = this.model.find({'categoria.subcategorias.1': {$exists: true}}).lean()

      return shops
      console.log(`Obteniendo tiendas con más de una categoría`)
    }catch(e){
      console.log(`Error obteniendo tiendas con más de una categoría`)
    }
  }
  async getByDate(fecha = '2022-04-04'){
    try{
      const shops = this.model.find({"fechaHoraAlta": {$gte: new Date(fecha)}}).lean()
      return shops
    }catch(e){
      console.log(`Error obteniendo tienda por fecha`)
    }
  }
}

module.exports = new Contenedor();
