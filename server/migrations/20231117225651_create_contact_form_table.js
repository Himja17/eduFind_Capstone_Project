/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contact_form", function (table) {
    table.increments("id").primary();
    table.string("name");
    table.string("email");
    table.text("message");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contact_form");
};