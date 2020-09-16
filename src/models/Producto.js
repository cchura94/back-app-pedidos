const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: "El Atributo nombre es obligatorio",
      trim: true,
    },
    precio: {
      type: Number,
      required: "El atributo precio es obligatorio",
    },
    stock: { type: Number, required: false, default: 0 },
    imagen: { type: String, required: false, trim: true },
    descripcion: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Producto", ProductoSchema);
