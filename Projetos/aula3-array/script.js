//o que são vetores ou arrays

//como declara um array
/* let array = ['string', 1, true];
    console.log(array); */


// pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'],['array3'], ['array4'],];
/* console.log(array[3]);*/


/* //forEach
array.forEach(function(item, index){console.log(item, index)}); */

//push
/* array.push('novo item');
console.log(array); */

/*array.pop();
console.log(array); */

/* array.shift();
console.log(array); */

/* array.unshift('novo item no início');
console.log(array); */

/* console.log(array.indexOf(true)); */

/* array.splice(0, 3);
console.log(array); */

/* let novoArray = array.slice(0, 3);
console.log(novoArray); */


let object = {string: 'string', number: 1, bolean: true, array: ['array'], objectInterno: {objectInterno: ('objeto interno')}};

/* console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var {string, bolean, objectInterno} = object;
console.log(string, bolean, objectInterno);