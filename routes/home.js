const { Router } = require("express");
const router = Router();

const tiendasModel = require("../models/tiendas");

/* Model */

/* Consignas
    
    1.-Devolver el numero de registros con la categoría Abarrotes y Cocina, así mismo cuántos pertenecen a la categoría Aluminio y Herrería.
    2.-Devolver cuantas tiendas tienen más de una sub categoría.
    3.-Tiendas creadas después del 04/04/2022.

*/
router.get("/", async (req, res) => {
  const nByCat = await tiendasModel.getNumByCat();

  res.render("main", { nByCat });
});

router.get("/only/:cat", async (req, res) => {
  const { cat } = req.params;
  const nByCat = await tiendasModel.getNumByCat(cat);

  res.render("main", { nByCat });
});

router.get("/shops", async (req, res) => {
  const shops = await tiendasModel.shopsGtOneCat()
  
  res.render("shops", { shops });
});

router.get("/date", async (req, res) => {
  const shops = await tiendasModel.getByDate()

  res.render("date", {shops})
});

module.exports = router;
