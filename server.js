// Import and Setup Dependencies

const express = require("express")
const drinks =require("./models/drinks")


const app = express()
const port = 3000

// Routes
app.get("/", (req, res)=>{
    res.send("welcome to the gitpub app")
})
        //INDEX ROUTE
app.get("/drinks", (req, res)=>{
    res.render("index.ejs",{drinks})
})

        // SHOW ROUTE
app.get("/drinks/:id", (req, res)=>{
    const para = req.params.id
    const eleDrinks = drinks[para]
    res.render("show.ejs", {eleDrinks, para})

})

// Listener
app.listen(port,()=>{
    console.log(`Port ${port} is working`);
})

