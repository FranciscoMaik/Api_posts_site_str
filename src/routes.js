const express = require("express");

const routes = express.Router(); //configurações de rotas

// VARIAVEIS DE CONTROLLERS
// const MarketController = require("./controllers/MarketController"); - exemplo;
const PostsController = require("./controllers/PostsControllers");

//ROTAS DA APLICAÇÃO
// routes.get("/market", MarketController.index); - exemplo

//rota de posts
routes.get("/posts", PostsController.index);
routes.post("/posts", PostsController.create);
routes.delete("/posts/:id", PostsController.delete);

module.exports = routes;
