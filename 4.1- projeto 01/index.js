const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //express usando ejs como view engine

app.get("/", (req, res) =>{
    res.render("index")
});

app.listen(8080,()=>{
    console.log("App rodando!");
});