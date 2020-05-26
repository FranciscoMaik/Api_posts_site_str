// Update with your config settings.

//Configurar as variaveis do banco
module.exports = {
  development: {
    client: "pg", //qual o tipo de banco
    connection: {
      database: "", //nome do banco criado no postgres
      user: "", //ususario do banco
      password: "", //senha do banco
    },
    migrations: {
      tableName: "knex_migrates", //nome da tabela de migações
      directory: __dirname + "/src/database/migrations", //local das migrates
    },
  },

  production: {
    client: "pg", //banco da procução
    connection: process.env.DATABASE_URL, //pega as vaiaveis de ambiente do banco
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/src/database/migrations", //local das migrates
    },
  },
};
