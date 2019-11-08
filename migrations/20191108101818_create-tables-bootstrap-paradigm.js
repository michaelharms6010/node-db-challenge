exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl
          .string("project_name")
          .unique()
          .notNullable();
        tbl.string("project_description");
        tbl.boolean("completed")
          .notNullable()
          .defaultTo(0)
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("task_description").notNullable();
        tbl.string("task_notes");
        tbl.boolean("completed")
          .notNullable()
          .defaultTo(0)
        tbl.integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
          
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("resource_name")
          .unique()
          .notNullable();
        tbl.string("resource_description");
      })
      .createTable("project-resources", tbl => {
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("project-resources")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("projects");
  };
  