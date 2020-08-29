const data = {
    frontend: 'Arturo',
    backend: 'Josef',
    design: 'Arlet'
};

// Convertir objeto a matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Valores de un objeto a array
const data = {
    frontend: 'Arturo',
    backend: 'Josef',
    design: 'Arlet'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'Hello';
// Con el método padStart se agrega un valor al inicio de la palabra
console.log(string.padStart(7, 'hi'));
// Con el método padEnd se agrega un valor al final de la palabra
console.log(string.padEnd(12, '----'));


// Trailing comas - Se deja una coma por si hay un nuevo valor después
const obj = {
    name: 'Arturo',
}