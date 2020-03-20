const express = require("express")
const server = express()

const cors = require("cors")
const helmet = require("helmet")

const authUser = require("./auth/users.js")
const logs = require("./logEndPoints.js/logs.js")

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use("/api/users", authUser)
server.use("/api/logs", logs)

server.get("/", (req, res) => {
    res.status(200).json({response: "server is responding"})
})
module.exports = server