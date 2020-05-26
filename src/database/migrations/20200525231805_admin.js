exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  // criação da tabela
  return knex.schema.createTable("admin", function (table) {
    table.uuid("id").defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("user").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("admin");
};
