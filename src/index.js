// imports
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
//importando el modulo rutas
import { rutas } from "./routes";
import { port } from "./config/config";

// configs
const app = express();
app.use(morgan("dev"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set("port", process.env.PORT || port);

//Configurando Base de datos
mongoose
  .connect("mongodb://localhost:27017/app-pedido", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("BD CONECTADO...");
  })
  .catch((error) => {
    console.log("ERROR DE CONEXION: ", error);
  });
//app.set("nombre", "Cristian");
//console.log(app.get("nombre"));

//Habilitando CORS para peticiones del lado del cliente
app.use(function (req, res, next) {
  //Sitio web al que se desea permitir que se conecte
  res.setHeader("Access-Control-Allow-Origin", "*");

  //habilitar los encabezados que desea permitir
  res.setHeader(
    "Access-Control-Allow-Headers",
    "content-type, X-Requested-With, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});

//Habilitar rutas
rutas(app);

// levantar servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en: 127.0.0.1:${app.get("port")}`);
});
