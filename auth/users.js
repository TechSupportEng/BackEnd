const express = require("express")
const bcrypt = require("bcrypt")

const Users = require("../user/userModel.js")
const generateToken = require("../user-middleware/Token.js")

const router = express.Router()

// register end point
router.post("/register", (req, res) => {  //http:/localhost:3000//api/users/register
    const username = req.body
    
    const hash = bcrypt.hashSync(username.password, 8)
    username.password = hash

    if(!hash) {
        res.status(404).json({error: "Please enter the correct credentials"})
    } else {
        Users.add(username)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log("catch from register", error)
            res.status(500).json({erorr: "Internal Server Error", "error": error.message
            })
        })
    }
})


// login end point
router.post("/login", (req, res) => {
    const { user } = req.body
    const { password } = req.body

    if(!user && !password) {
        res.status(401).json({error: "Wrong password or username"})
    } else {
        Users.addId(req.body.username)
        .first()
       .then(users => {
            if(users && bcrypt.compareSync(password, users.password)) {
                const token = generateToken(users)

                res.status(200).json({message: `Welcome ${users.username}`, token, id: users.id})
            } else {
                res.status(400).json({error: "Please provide correct credentials"})
            }
       }) 
       .catch(error => {
            console.log("This is the catch from login", error)
            res.status(500).json({error: "Internal Server Error"})
       })
    }
})

module.exports = router