// imports
import express from "express";
import morgan from "morgan";
//importando el modulo rutas
import { rutas } from "./routes";
import { port } from "./config/config";

// configs
const app = express();
app.use(morgan("dev"));

app.set("port", process.env.PORT || port);

//app.set("nombre", "Cristian");
//console.log(app.get("nombre"));

//Habilitar rutas
rutas(app);

// levantar servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en: 127.0.0.1:${app.get("port")}`);
});
