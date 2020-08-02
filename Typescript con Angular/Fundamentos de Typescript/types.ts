/* En JS y Typescript tenemos tres tipos de variables */
// const es una constante que no puede ser reasignada en su valor
const constante = 'No voy a cambiar';
// let solo está disponible en el scope que fue declarada
let variable_local = 'Aquí me quedo';
// var es una variable global y está disponible en todo el scope
var variable_global = 'Hola a todos';

// Para declarar variables en Typescript se hace igual que en JS
/* Aquí podemos definir el tipo de variable que estamos declarando
Se utilizan dos puntos después del nombre de la variable y luego el tipo */
let numero: number = 10; // -> variable de tipo numero
let palabra: string = 'Hola'; // -> variable de tipo string
let arregloN: Array<number> = [1, 2, 3]; // -> variable de tipo array que contiene numeros
let arregloP: Array<string> = ['a', 'b', 'c']; // -> variable de tipo array que contiene strings
let si: boolean = true; // -> variable de tipo booleana
let no: boolean = false;

// Cuando no se le indica el tipo a Typescript, da como tipo al primer valor que le demos
let tipo = 'Adios'; // -> Aquí se le está asignando como tipo string implicitamente

// También le podemos asignar un tipo a las funciones y sus parametros
function suma(n1: number, n2: number): number{
    return n1 + n2;
}

// Si queremos crear un tipo de variable, o más bien darle un alias es con la siguiente sintaxis
type nombre = string;
type edad = number;

let nombre: nombre = 'Arturo';
let edad: edad = 21;