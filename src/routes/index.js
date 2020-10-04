const clienteController = require("./../controllers/clienteController");

const productoController = require("./../controllers/productoController");

const pedidoController = require("./../controllers/pedidoController");

const authController = require("./../controllers/authController");

const usuarioController = require("./../controllers/usuarioController");

// Middlewares
const authMiddlewares = require("./../middlewares/authMiddleware");
/**
 * Necesita enviar app de express
 * @param app:express
 */
module.exports.rutas = (app) => {
  // rutas de auth
  app.post("/login", authController.login);
  // rutas de usuario
  app.get("/usuario", authMiddlewares.verificarAuth, usuarioController.listar);
  app.post(
    "/usuario",
    authMiddlewares.verificarAuth,
    usuarioController.guardar
  );
  // rutas de Cliente
  app.get("/cliente", authMiddlewares.verificarAuth, clienteController.listar);
  app.get(
    "/cliente/:id",
    authMiddlewares.verificarAuth,
    clienteController.mostrar
  );
  app.post(
    "/cliente",
    authMiddlewares.verificarAuth,
    clienteController.guardar
  );
  app.put(
    "/cliente/:id",
    authMiddlewares.verificarAuth,
    clienteController.modificar
  );
  app.delete(
    "/cliente/:id",
    authMiddlewares.verificarAuth,
    clienteController.eliminar
  );
  // rutas de Producto
  app.get(
    "/producto",
    authMiddlewares.verificarAuth,
    productoController.listarprod
  );
  app.get(
    "/producto/:id",
    authMiddlewares.verificarAuth,
    productoController.mostrar
  );
  app.post(
    "/producto",
    authMiddlewares.verificarAuth,
    productoController.guardar
  );
  app.put(
    "/producto/:id",
    authMiddlewares.verificarAuth,
    productoController.modificar
  );
  app.delete(
    "/producto/:id",
    authMiddlewares.verificarAuth,
    productoController.eliminar
  );
  // rutas de Pedidos

  app.get("/pedido", authMiddlewares.verificarAuth, pedidoController.listar);
  app.post("/pedido", authMiddlewares.verificarAuth, pedidoController.guardar);
};

// var mi_variable

//NOMBRE: Laptop Toshiva 2020
//slug: laptop-toshiva-2020

// 1 Cliente es persona
// 1 pedido
// N Productos
