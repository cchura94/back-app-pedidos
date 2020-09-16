const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    usuario: { type: String, required: false },
    correo: { type: String, required: "El correo es obligatorio", trim: true },
    password: { type: String, required: true },
    estado: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
  }
);
