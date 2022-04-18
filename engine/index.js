//Handlebars set
const path = require("path");
const { engine } = require("express-handlebars");

module.exports=(app)=>{
  app.engine(
    "handlebars",
    engine({
      layoutDir: path.join(__dirname, "../views/layouts"),
      defaultLayout: "index",
    })
  );
  app.set("view engine", "handlebars");
}
