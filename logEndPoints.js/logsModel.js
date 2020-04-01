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
    "completed",
    "errorMeessage",
    "comments",
    "discovered",
    "outcome"
  )
}

function find() {
  return db("logs").select(
    "id",
    "time-of-log",
    "time-of-incident",
    "incident-number",
    "completed",
    "error-message",
    "comments",
    "discovered",
    "outcome"
  )
}
