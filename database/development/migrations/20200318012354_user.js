
exports.up = function(knex) {
  return knex.schema.createTable("user", tbl => {
      tbl.increments()
      
      tbl.text("username", 30).notNullable()
      tbl.text("password", 25).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user")
};