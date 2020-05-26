const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.json()); ///para receber e enviar arquivos json
app.use(routes); //usando as rotas e tem que ficar abaixo do json; top-down;
app.listen(process.env.PORT || 3333);
