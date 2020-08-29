function newFunction(name, age, country){
    var name = name || 'Arturo';
    var age = age || 21;
    var country = country || 'Mexico';

    console.log(name, country, age);
}


// ES6
function newFunction2(name = 'Arturo', age = 21, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Josef', 16, 'Colombia');

// Template literals
let hello = 'Hello';
let world = 'world';

/* Antes */
let epicPhrase = hello + ' ' + world;

/* Con Ecma Script 6 */
let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase2);



// Multilínea en Strings
/* Antes */
let lorem = 'Buenas tardes, espero que se encuentren muy bien\n' +
'Hoy vamos a ver algo sorprendente!';
console.log(lorem);

/* ES6 */
let lorem2 = `Buenas tardes, espero que se encuentren muy bien
Hoy vamos a ver algo sorprendente!`;
console.log(lorem2);



// Spread operator
let person = {
    name: 'Arturo',
    age: 21,
    country: 'MX'
}
/* Antes */
console.log(person.name, person.age, person.country);

/* Ecma Script 6 */
let { name, age, country } = person;
console.log(name, age, country);



// Desestructuración
let team1 = ['Arturo', 'Josef', 'Arlet'];
let team2 = ['Jorge', 'Sergio', 'Brian'];

let education = ['David', ...team1, ...team2];

console.log(education);



// var, let y const
/* Con var las variables son globales */
{ var variableGlobal = 'Global'; }
console.log(variableGlobal);

/* Con let la variable solo está disponible en el scope */
{
    let variableScope = 'Scope';
    console.log(variableScope);
}

/* const es una constante, por lo que su valor no puede ser reasignado. Se comporta como let */
{
    const variableConstant = 'Constante'
    console.log(variableConstant);
}

/* Asignacion de valores en objetos */
let name = 'Arturo';
let age = 21;

/* Antes */
obj1 = { name: name, age: age };

/* ES6 */
obj2 = { name, age }



// Arrow Function
const names = [
    {
        name: 'Arturo',
        age: 21,
    },
    {
        name: 'Josef',
        age: 16
    }
];

/* Antes */
let listOfNames = names.map(function(item){
    console.log(item.name);
});

/* ES6 */
let listOfNames2 = names.map(item => {
    console.log(item.name);
});

const listOfNames3 = (name, age) => {
    //...;
};

const listOfNames4 = name => {
    //...
};

const square = num => num * num;



// Promesas
const promise = () => {
    return new Promise((resolve, reject) => {
        if(true == 0){
            resolve('Hey, está todo bien!');
        }else{
            reject('Ups, algo salió mal');
        }
    });
}

promise()
    .then( response => console.log(response) )
    .catch( reject => console.log(reject) );