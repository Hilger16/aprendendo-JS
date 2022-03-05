/* Reduce
Some todos os números de um array
 */

function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0
    //se colocar 0 o primeiro valor vai dar 1 e como o prev é também um acumulador, ele vai fazer mais uma rodada e acumular o primeiro valor para somar com o segundo
    );
}

const arr = [1, 2];

console.log(somaNumeros(arr));