const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./../config/config");
const Usuario = require("./../models/Usuario");

const login = async (req, res) => {
  // 1. verificar si el email existe
  const user = await Usuario.findOne({ correo: req.body.correo });
  if (!user) {
    res.json({ mensaje: "Usuario Incorrecto" });
  } else {
    const estado = await bcrypt.compare(req.body.password, user.password);
    if (estado) {
      //generar el token (jwt)
      const payload = {
        correo: user.correo,
        id: user._id,
        time: new Date(),
      };

      var token = jwt.sign(payload, config.JWT_SECRET, {
        expiresIn: config.JWT_TIEMPO,
      });
      res.json({
        access_token: token,
        usuario: {
          _id: user._id,
          correo: user.correo,
          usuario: user.usuario,
          fecha: new Date(),
        },
      });
    } else {
      res.json({ mensaje: "Contraseña Incorrecto" });
    }
  }
};

module.exports = {
  login,
};
