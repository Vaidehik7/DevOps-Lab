const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.send("Hello! I am in server.js")
})

app.get("/home", function(req, res){
    res.send("I am in Home Page!")
})

app.listen(3000)

// console.log("Hello!")




















// select which changes will be included in your next commit.
