const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //express usando ejs como view engine

app.get("/:nome?/:lang?", (req, res) =>{
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.15},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 50},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 3}
    ];

    res.render("index", {
        nome : nome, 
        lang : lang,
        msg : exibirMsg,
        produtos : produtos
    });
});

app.listen(8080,()=>{
    console.log("App rodando!");
});