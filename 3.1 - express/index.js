const express = require("express"); //importando express
const app = express(); //iniciando express

app.get("/", function(req, res){ //rota
    res.send("Bem vindo!");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao blog!");
});

app.get("/youtube", function(req, res){
    res.send("Bem vindo ao canal!");
});

app.listen(4000, function(erro){ //inicia servidor
    if(erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});