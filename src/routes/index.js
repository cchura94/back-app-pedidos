const clienteController = require("./../controllers/clienteController");

const productoController = require("./../controllers/productoController");

/**
 * Necesita enviar app de express
 * @param app:express
 */
module.exports.rutas = (app) => {
  // rutas de auth
  // rutas de usuario
  // rutas de Cliente
  app.get("/cliente", clienteController.listar);
  app.get("/cliente/:id", clienteController.mostrar);
  app.post("/cliente", clienteController.guardar);
  app.put("/cliente/:id", clienteController.modificar);
  app.delete("/cliente/:id", clienteController.eliminar);
  // rutas de Producto
  app.get("/producto", productoController.listar);
  app.get("/producto/:id", productoController.mostrar);
  app.post("/producto", productoController.guardar);
  app.put("/producto/:id", productoController.modificar);
  app.delete("/producto/:id", productoController.eliminar);
  // rutas de Pedidos
};

// var mi_variable

//NOMBRE: Laptop Toshiva 2020
//slug: laptop-toshiva-2020
