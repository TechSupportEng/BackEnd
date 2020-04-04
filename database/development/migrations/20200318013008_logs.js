exports.up = function(knex) {
  return knex.schema.createTable("logs", tbl => {
    tbl.increments()

    
    tbl.string("timeOfLog", 128).notNullable()
    tbl.string("timeOfIncident", 128).notNullable()
    tbl.string("incidentNumber", 128).notNullable()
    tbl.string("status").notNullable()
    tbl.string("errorMessage", 128)
    tbl.string("nameOfLog", 128)
    tbl.string("discoveries", 128).notNullable()
    tbl.string("outcome", 128).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("logs")
}
