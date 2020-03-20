const express = require("express")
const Logs = require("./logsModel.js")

const router = express.Router()

router.post("/logscards", (req, res) => {
    const body = req.body

    Logs.add(body)
    .then(response => {
        res.status(200).json({message: "card was created successfully",response})
    })
    .catch(error => {
        console.log("error from catch in logscards", error)
        res.status(500).json({error: "internal server error"})
    })
})

router.get("/getlogs", (req, res) => {
    const body = req.body
    const id = req.params

    Logs.find(body && id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log("error from catch in getlogs", error)
        res.status(500).json({error: "internal server error"})
    })
})

module.exports = router