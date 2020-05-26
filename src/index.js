const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json()); ///para receber e enviar arquivos json
app.use(routes); //usando as rotas e tem que ficar abaixo do json; top-down;
app.listen(3333);
