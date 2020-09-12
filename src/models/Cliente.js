const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  nombres: { type: String, required: false, trim: true },
  apellidos: {
    type: String,
    required: "El atributo Apellido es obligatorio",
    trim: true,
  },
  empresa: { type: String, required: false, trim: true },
  email: { type: String, required: false, trim: true },
  telefono: { type: String, required: false, trim: true },
});

module.exports = mongoose.model("Cliente", ClienteSchema);
