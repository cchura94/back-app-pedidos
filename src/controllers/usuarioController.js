const Usuario = require("./../models/Usuario");
//Importamos el bcrypt para cifrar las contraseñas
const bcrypt = require("bcrypt");

const listar = async function (req, res) {
  try {
    var datos = await Usuario.find();
    res.json(datos);
  } catch (error) {
    console.log("ERROR: ", error);
  }

  //res.json({ mensaje: "Lista de Clientes" });
};

const guardar = async (req, res) => {
  var BCRYPT_SALT_ROUNDS = 12;
  bcrypt
    .hash(req.body.password, BCRYPT_SALT_ROUNDS)
    .then(function (hashedPassword) {
      console.log(hashedPassword);
      req.body.password = hashedPassword;

      const user = new Usuario(req.body);
      user
        .save()
        .then((dato) => {
          res.json({ mensaje: "Usuario registrado", dato });
        })
        .catch((error) => {
          console.log(error);
          res.json({ mensaje: "Error al registrar el usuario", dato });
        });
    })
    .catch((error) => {
      console.log(error);
      res.json({ mensaje: "Error al cifrar la contraseña", dato });
    });
};

module.exports = {
  listar,
  guardar,
};
