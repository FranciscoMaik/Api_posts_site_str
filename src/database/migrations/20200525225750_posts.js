exports.up = function (knex) {
  // criação da tabela
  return knex.schema.createTable("posts", function (table) {
    table.increments();
    table.string("urlimage").notNullable();
    table.string("companyname").notNullable();
    table.string("operation").notNullable();
    table.string("contact").notNullable();
    table.string("responsible").notNullable();
    table.string("paymenttype").notNullable();
    table.string("delivery").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
