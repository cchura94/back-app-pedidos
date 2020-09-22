const clienteController = require("./../controllers/clienteController");

const productoController = require("./../controllers/productoController");

const authController = require("./../controllers/authController");

const usuarioController = require("./../controllers/usuarioController");

// Middlewares
const authMiddlewares = require("./../middlewares/authMiddleware")
/**
 * Necesita enviar app de express
 * @param app:express
 */
module.exports.rutas = (app) => {
  // rutas de auth
  app.post("/login", authController.login);
  // rutas de usuario
  app.get("/usuario", authMiddlewares.verificarAuth, usuarioController.listar);
  app.post("/usuario", usuarioController.guardar);
  // rutas de Cliente
  app.get("/cliente", clienteController.listar);
  app.get("/cliente/:id", clienteController.mostrar);
  app.post("/cliente", clienteController.guardar);
  app.put("/cliente/:id", clienteController.modificar);
  app.delete("/cliente/:id", clienteController.eliminar);
  // rutas de Producto
  app.get("/producto", productoController.listarprod);
  app.get("/producto/:id", productoController.mostrar);
  app.post("/producto", productoController.guardar);
  app.put("/producto/:id", productoController.modificar);
  app.delete("/producto/:id", productoController.eliminar);
  // rutas de Pedidos
};

// var mi_variable

//NOMBRE: Laptop Toshiva 2020
//slug: laptop-toshiva-2020

// 1 Cliente es persona
// 1 pedido
// N Productos
