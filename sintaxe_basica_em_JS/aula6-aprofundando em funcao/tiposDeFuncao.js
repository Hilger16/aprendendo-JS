// tipos de funções

// declarativas
/* function funcao () {
    console.log("Sou uma mensagem de funcao declarativa!");
}
funcao(); */

// expressão de funcão
var funcao = function funcao () {
    console.log("Sou uma mensagem de uma função de expressão!");
}
funcao();

//ou 
var funcao = function() {
    console.log("Sou uma mensagem de uma função de expressão!");
}
funcao();

//arrow funtions
var funcao = () => {
    console.log("Sou uma arrow function!");
}
funcao();