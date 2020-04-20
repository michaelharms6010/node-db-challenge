
exports.up = function(knex) {
  return knex.schema.createTable("contexts", tbl => {
    tbl.increments();
    tbl.string("name").notNullable()
  })
  .createTable("task_contexts", tbl => {
    tbl.increments();
    tbl
    .integer("task_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("tasks")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
  tbl
    .integer("context_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("contexts")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("task_contexts")
  .dropTableIfExists("contexts")
};
