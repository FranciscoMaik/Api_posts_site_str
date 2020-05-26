const express = require("express");

const routes = express.Router(); //configurações de rotas

// VARIAVEIS DE CONTROLLERS
// const MarketController = require("./controllers/MarketController"); - exemplo;
const PostsController = require("./controllers/PostsControllers");

//ROTAS DA APLICAÇÃO
// routes.get("/market", MarketController.index); - exemplo

//rota de posts
routes.get("/posts", PostsController.index);

module.exports = routes;
