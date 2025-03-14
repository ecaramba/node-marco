// servidor
// http

const express = require("express");
const app = express();

app.get("/contato", function(req, res){
    res.status(401).send("<h1>Oi Turma!</h1>");
});

app.get("/", function(req, res){
    res.send("Enviar email");
});

app.listen(3000, function(erro){
    console.log(erro);
    console.log("servidor iniciado")
});