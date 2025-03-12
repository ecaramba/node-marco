// criar um arquivo

// modulo node
const fs = require("fs");

// modulo interno
const soma = require("./funcao");

console.log(soma);

let res = soma(3,4);
console.log(res);

let conteudo = "arquivo criado pelo nodejs.\n";
let options = {flag: "a"};

// console.log("antes");

// fs.writeFile("texto.txt", conteudo, options, function(erro){
//     console.log(erro);
//     console.log("gravou");
// });

// console.log("depois");

// fs.readFile("texto.txt", "utf8", function(erro, dados){
//     console.log(erro);
//     console.log(dados);
// });

console.log("Digite o n1:");
process.stdin.on('data', function(dados){
    let n1 = dados.toString().trim();
    console.log(n1);
    if (n1 == "s")
    {
        process.exit();
    }
});
