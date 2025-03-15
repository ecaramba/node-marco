// servidor
// http

const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/contato", function(req, res){
   
    // pegando os valores do form
    let valores = req.query;
    res.json(valores);
    
});

app.post("/contato", function(req, res){

    let val = req.body.nome + "," + req.body.email + "\n";

    let options = {
        flag: "a"
    };

    fs.writeFile("alunos.csv", val, options , function(){
        
        res.send("Email cadastrado");

    })


});

app.post("/calc", function(req, res){

    let resultado = 0;

    resultado = parseInt(req.body.num1) + parseInt(req.body.num2)

    res.send("Resultado: " + resultado);

});

app.get("/", function(req, res){
    res.send("Enviar email!");
});

app.listen(3000, function(erro){
    console.log(erro);
    console.log("servidor iniciado")
});