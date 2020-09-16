const Usuario = require("./../models/Usuario");

const login = async (req, res) => {
  // 1. verificar si el email existe
  const user = await Usuario.findOne({ correo: req.body.correo });
  if (!user) {
    res.json({ mensaje: "Usuario Incorrecto" });
  } else {
    res.json({ mensaje: "Bienvenido" + req.body.correo });
  }
};

module.exports = {
  login,
};
