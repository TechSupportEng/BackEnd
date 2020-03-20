
exports.up = function(knex) {
  return knex.schema.createTable("logs", tbl => {
      tbl.increments()

      tbl.string("time-of-log", 128).notNullable()
      tbl.string("time-of-incident", 128).notNullable()
      tbl.string("incident-number", 128).notNullable()
      tbl.string("completed").notNullable()
      tbl.string("error-message", 128)
      tbl.string("comments", 128)
      tbl.string("discovered", 128).notNullable()
      tbl.string("outcome", 128).notNullable()
  })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists("logs")
};
