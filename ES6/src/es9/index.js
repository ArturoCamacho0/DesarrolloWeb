// Spread Operator
const obj = {
    name: 'Arturo',
    age: 21,
    country: 'MX'
};

/* Con esto podemos excluir datos de un objeto */
let { country, ...all } = obj;

console.log(all);


// Propagation properties
const obj = {
    name: 'Arturo',
    age: 21,
};

/* Así se pueden unir dos objetos dentro del mismo */
const obj2 = {
    ...obj,
    country: 'MX'
}