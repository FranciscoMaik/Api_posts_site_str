const express = require("express");

const routes = express.Router(); //configurações de rotas

// VARIAVEIS DE CONTROLLERS
// const MarketController = require("./controllers/MarketController"); - exemplo;
const PostsController = require("./controllers/PostsControllers");
const AdminController = require("./controllers/AdminControllers");

//ROTAS DA APLICAÇÃO
// routes.get("/market", MarketController.index); - exemplo

//rota de posts
routes.get("/posts", PostsController.index);
routes.post("/posts", PostsController.create);
routes.delete("/posts/:id", PostsController.delete);

//rota de administrador
routes.get("/admin", AdminController.create);
routes.post("/admin", AdminController.index);
routes.delete("/admin/:user", AdminController.delete);

module.exports = routes;
