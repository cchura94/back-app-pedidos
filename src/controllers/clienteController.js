const Cliente = require("./../models/Cliente");

const listar = async function (req, res) {
  /*Cliente
    .find()
    .then((datos) => {
      res.json(datos);
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
    */

  try {
    var datos = await Cliente.find();
    res.json(datos);
  } catch (error) {
    console.log("ERROR: ", error);
  }

  //res.json({ mensaje: "Lista de Clientes" });
};

const mostrar = async function (req, res) {
  let id = req.params.id;
  // con promesa
  /*Cliente.findById(id)
    .then((clie) => {
      res.json(clie);
    })
    .catch((error) => {
      res.json({ mensaje: "Error de Clientes" });
    });*/
  //async Await
  try {
    var clie = await Cliente.findById(id);
    res.json(clie);
  } catch (error) {
    res.json({ mensaje: "Error de Clientes" });
  }
};

const guardar = function (req, res) {
  const clie = new Cliente(req.body);
  clie.save();
  res.json({ mensaje: "Cliente registrado", clie });
};

const modificar = async function (req, res) {
  let id = req.params.id;
  //Promesa
  /*Cliente.findByIdAndUpdate(id, req.body)
    .then((dato) => {
      res.json({ mensaje: "Cliente Modificado" });
    })
    .catch((error) => {
      console.log(error);
    });*/

  //Asyn Await
  //var dato = await Cliente.findOneAndUpdate({ _id: id }, req.body);
  //console.log(dato);
  // Verificar
  const clie = await Cliente.findById(id);
  const cliemod = await clie.updateOne(req.body);
  res.json({ mensaje: "Cliente Modificado", cliemod });
};

const eliminar = async function (req, res) {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Cliente Eliminado" });
  } catch (error) {
    console.log(error);
    res.json({ mensaje: "no se pudo eliminar al Cliente" });
  }
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar,
};
