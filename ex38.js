// 1, 5, 10, 50, 100

let valor = 256;

let cem = 0;
let cinq = 0;
let dez = 0;
let cinco = 0;
let um = 0;

let resto = 0;

cem = parseInt(valor / 100);
resto = valor % 100;

if (resto > 0)
{
    valor = resto;

    cinq = parseInt(valor / 50);
    resto = valor % 50;
}

console.log("notas de cem: " + cem);
console.log("notas de cinquenta: " + cinq);