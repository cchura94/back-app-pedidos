const listar = function (req, res) {
  res.json({ mensaje: "Lista de Clientes" });
};

const mostrar = function (req, res) {
  res.json({ mensaje: "Mostrar Cliente" });
};

const guardar = function (req, res) {
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
