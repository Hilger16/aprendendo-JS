//utilizando a função MAP para retornar o nome de membros que tem papel de admin no sistema
function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Matheus', 'Admin');
usuarios.set('Aline', 'Admin');
usuarios.set('Ricardo', 'user');
usuarios.set('Felipe', 'Admin');
usuarios.set('Ana', 'user');

console.log(getAdmins(usuarios));



// metodo set para retornar array com numeros unicos
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

//assim já daria, mas é pra retornar um outro array só com valores únicos
console.log(valoresUnicos(meuArray));