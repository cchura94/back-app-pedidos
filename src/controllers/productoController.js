const Producto = require("./../models/Producto");
const { isValidObjectId } = require("mongoose");

const listarprod = async function (req, res) {
  /*Producto.find()
    .then((datos) => {
      res.json(datos);
    })
    .catch((error) => {
      console.log(error);
    });*/
  try {
    const datos = await Producto.find();
    res.json(datos);
  } catch (error) {
    console.log(error);
    res.json({
      mensaje: "Ocurrio un error al listar producto",
      status: 404,
    });
  }
};

const mostrar = async function (req, res) {
  try {
    const dato = isValidObjectId(req.params.id);
    if (dato) {
      const producto = await Producto.findById(req.params.id);
      res.json({ mensaje: "producto", datos: producto });
    } else {
      res.json({ mensaje: "Producto no encontrado", status: 404 });
    }
  } catch (error) {
    console.log(error);
    res.json({
      mensaje: "Ocurrio un error al buscar el producto",
      status: 404,
    });
  }
};

const guardar = function (req, res) {
  try {
    const prod = new Producto(req.body);
    prod.save();
    res.json({ mensaje: "Producto registrado", prod });
  } catch (error) {
    console.log(error);
  }
};

const modificar = function (req, res) {
  res.json({ mensaje: "Modificar Producto" });
};

const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar Producto" });
};

module.exports = {
  listarprod,
  mostrar,
  guardar,
  modificar,
  eliminar,
};
