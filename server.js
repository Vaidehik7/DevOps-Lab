const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.send("Hello! I am in server.js")
})

app.listen(3000)

// console.log("Hello!")

