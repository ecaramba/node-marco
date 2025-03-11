
let aluno = "Pedro";

// estrutura de dados
// array -> vetores

let alunos = ["Pedro", "Ana", "João", 123];

alunos.push("Mario");

alunos[3] = "Maria";


// loops -> repetições

let ini = 0;
let fim = alunos.length - 1;

while (ini <= fim)
{
    console.log(alunos[ini] );

    ini = ini + 1;
}

let ini_r = alunos.length - 1;
let fim_r = 0;

while (ini_r >= fim_r)
{
    console.log(alunos[ini_r] );

    ini_r = ini_r - 1;
}

// ordenação 

console.log("-- sort --");

alunos.sort();

let fim_f = alunos.length - 1;

for (let ini = 0; ini <= fim_f; ini = ini + 1)
{
    console.log(alunos[ini] );
}

// forEach

console.log("-- foreach --");

alunos.forEach(function(item){
    console.log(item);
});