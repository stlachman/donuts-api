exports.up = function(knex) {
  return knex.schema.createTable("donuts", tbl => {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.string("ingredients").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("donuts");
};
