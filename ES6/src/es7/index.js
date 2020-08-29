let numbers = [1, 2, 3, 4, 5, 6, 7 , 8];

// Con el método includes podemos saber si un valor se encuentra dentro de un arreglo.
/* El primer parámetro indica el valor a buscar y el segundo desde que posición buscará */
if(numbers.includes(9)){
    console.log('Si se encuentra el valor');
}else{
    console.log('No se encuentra el valor');
}

// Elevar números a una potencia
const n = 5;
let exp = 3;

let result = n**exp;

console.log(result);