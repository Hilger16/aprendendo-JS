// quando foi declara var depois do console o JS automaticamente sobe o codigo e identifica a declaração da variável, já com o let não
/* numberOne = 1;

console.log(numberOne + 2);

var numberOne; */

/* numberOne = 1;

console.log(numberOne + 2);

let numberOne; */

var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';
}
console.log(firstName, lastName);