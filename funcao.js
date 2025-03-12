
// E -> P -> S

let n1 = 2;
let n2 = 3;
let n3 = 4;

function soma(n1, n2)
{
    let n3 = 5;
    let resultado = n1 + n2 + n3;
    return resultado;
}

function sub(n1, n2)
{
    let resultado = n1 - n2;
    return resultado;
}

let res = sub(3,5);

// console.log(res);

// função anonima

let mult = function(n1, n2)
{
    return n1 * n2;
}

/**
 * Executa uma operação matematica
 * @param {number} n1 primeiro numero
 * @param {number} n2 segundo numero
 * @param {Function} op operação matematica
 * @returns {Number}
 */
function calc(n1, n2, op)
{
    return op(n1, n2);
}

// console.log( calc(3,5, mult) );
// console.log( calc(3,5, soma) );
// console.log( calc(3,5, sub) );


module.exports = soma;