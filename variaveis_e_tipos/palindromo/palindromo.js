//solução 1
function verificaPalindromo(string) {
    //determina que a string existe
    if (!string) return "string inexistente";

    //split separa os caracteres da palavra, o reverse inverte a ordem das letras e o join junta tudo para depois com o === comparar se é igual a palavra original
    string.split("").reverse().join("") === string;
}


console.log(verificaPalindromo("ovo"));

//solução 2
//
function verificaPalindromo2(string) {
    if (!string) return "String inexistente";

    // é /2 por que como ele compara a primeira com a ultima, a segunda com a penúltima, o código só prescisa verificar até a metade para poder dizer se é um palindromo ou não
    for (let i = 0; i < string.length / 2; i++) {
        //se string(indice tal) for diferente de string[string comprimento -1 - o indice] retorna false, se não continua a verificação
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo2("abba"));