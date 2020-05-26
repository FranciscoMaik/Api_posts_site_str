exports.up = function (knex) {
  // criação da tabela
  return knex.schema.createTable("posts", function (table) {});
};

exports.down = function (knex) {};
