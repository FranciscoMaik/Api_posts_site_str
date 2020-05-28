const knex = require("knex");
const configuration = require("../../knexfile"); //configurações do banco

const database = knex(configuration.production); //informa qual configuração de banco se está usando

module.exports = database; // exportação da variavel de configuração e acesso do database
