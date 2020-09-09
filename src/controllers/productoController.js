const listar = function (req, res) {
  res.json({ mensaje: "Lista de Productos" });
};

const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar Producto" });
};

const guardar = function (req, res) {
  res.json({ mensaje: "Guardar Producto" });
};

const modificar = function (req, res) {
  res.json({ mensaje: "Modificar Producto" });
};

const eliminar = function (req, res) {
  res.json({ mensaje: "Eliminar Producto" });
};

module.exports = {
  listar,
  mostrar,
  guardar,
  modificar,
  eliminar,
};
