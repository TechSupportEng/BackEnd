const db = require("../db-config.js")

module.exports = {
    add,
    addId
}

function add(event) { // post req
    return db("user")
    .insert(event, "username", "password")
}

function addId(adduser) {
    return db("user")
    .where({username: adduser})
}
