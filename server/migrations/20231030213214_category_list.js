/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("category", (table) => {
      table.increments("id").primary();
      table.string("field").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("programs", (table) => {
      table.increments("id").primary();
      table
        .integer("category_id")
        .unsigned()
        .references("category.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("school").notNullable();
      table.string("program").notNullable();
      table.string("degree").notNullable();
      table.integer("duration_value").notNullable();
      table.string("duration_unit").notNullable();
      table.string("tuition_fees").notNullable();
      table.string("program_url").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("programs").dropTable("category");
};
