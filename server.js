// Import and Setup Dependencies

const express = require("express")
const drinks =require("./models/drinks")


const app = express()
const port = 3000

// Routes
app.get("/", (req, res)=>{
    res.send("welcome to the gitpub app")
})

app.get("/drinks", (req, res)=>{
    res.send(drinks)
})

// Listener
app.listen(port,()=>{
    console.log(`Port ${port} is working`);
})

