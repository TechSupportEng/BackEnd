const db = require("../db-config.js")

module.exports = {
  add,
  find
}

function add(logger) {
  return db("logs").insert(
    logger,
    "id",
    "timeOfLog",
    "timeOfIncident",
    "incidentNumber",
    "status",
    "errorMessage",
    "nameOfLog",
    "discoveries",
    "outcome"
  )
}

function find() {
  return db("logs").select(
    "id",
    "timeOfLog",
    "timeOfIncident",
    "incidentNumber",
    "status",
    "errorMessage",
    "nameOfLog",
    "discoveries",
    "outcome"
  )
}
