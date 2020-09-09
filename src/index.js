// imports
const express = require("express");
const morgan = require("morgan");
//importando el modulo rutas
const routes = require("./routes");

// configs
const app = express();
app.use(morgan("dev"));

//Habilitar rutas
routes.rutas(app);

// levantar servidor
app.listen(3000, () => {
  console.log("Servidor levantado en: ");
});
