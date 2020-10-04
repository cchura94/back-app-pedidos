const jwt = require("jsonwebtoken");
const config = require("./../config/config");

const verificarAuth = async (req, res, next) => {
  let token = null;
  //"bearer skdfaskfasfan.s87wc8q7t78qt7wt.87qt7wt7q877qtw878"
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
    //console.log(token);
  }
  if (!token) {
    return res.status(403).send({
      auth: false,
      mensaje: "No se proporcionó token de seguridad",
    });
  }
  jwt.verify(token, config.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(404).send({
        auth: false,
        mensaje: "Error de Authenticacion",
      });
    }
    next();
  });
};

module.exports = {
  verificarAuth,
};
