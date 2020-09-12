const cliente = require("./../models/Cliente");

const listar = async function (req, res) {
  /*cliente
    .find()
    .then((datos) => {
      res.json(datos);
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });*/
  var datos = await cliente.find();
  res.json(datos);
  //res.json({ mensaje: "Lista de Clientes" });
};

const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar Cliente" });
};

const guardar = function (req, res) {
  const clie = new cliente({
    nombres: "Juan Perez",
    apellidos: "Quisbert",
  });
  clie.save();
  res.json({ mensaje: "Guardar Cliente" });
};

const modificar = function (req, res) {
  res.json({ mensaje: "Modificar Cliente" });
};

const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar Cliente" });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar,
};
