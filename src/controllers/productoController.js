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

const modificar = async function (req, res) {
  try {
    let id = req.params.id;
    const prod = await Producto.findById(id);
    const prodmod = await prod.updateOne(req.body);
    res.json({ mensaje: "Producto Modificado", prodmod });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ mesaje: "Ocurrio un error al intentar modificarel Producto" });
  }
};

const eliminar = async function (req, res) {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Producto Eliminado" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ mesaje: "Ocurrio un error al intentar eliminar el Producto" });
  }
};

module.exports = {
  listarprod,
  mostrar,
  guardar,
  modificar,
  eliminar,
};
