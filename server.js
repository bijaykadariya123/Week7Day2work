// Import and Setup Dependencies

const express = require("express")

const app = express()
const port = 3000

// Routes
app.get("/", (req, res)=>{
    res.send("welcome to the gitpub app")
})

// Listener
app.listen(port,()=>{
    console.log(`Port ${port} is working`);
})

