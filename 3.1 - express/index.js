const express = require("express"); //importando express
const app = express(); //iniciando express

//req dados enviados pelo usuario
//res resposta para o usuario
app.get("/", function(req, res){ //rota
    res.send("<h1>Bem vindo!</h1>");
});

app.get("/blog/:artigo?", function(req, res){

    var artigo = req.params.artigo;
    if(artigo){
        res.send("Artigo: " + artigo);
    } else {
        res.send("Bem vindo ao blog!");
    }
});

app.get("/youtube", function(req, res){
    var canal = req.query["canal"];
    if(canal){
       res.send(canal); 
    } else {
        res.send("Nenhum canal fornecido"); 
    }
    
});

app.get("/ola/:nome", function(req, res){
    var nome = req.params.nome;
    res.send("<h1>Oi " + nome + "</h1>");
});

app.listen(4000, function(erro){ //inicia servidor
    if(erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});