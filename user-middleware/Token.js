const jwt = require("jsonwebtoken")
const secrets = require("../secrets.js")

function generateToken(user) {
    const payload = {
        name: user.name,
        subject: user.id
    }
    const options = {
        expiresIn: "100d"
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = generateToken