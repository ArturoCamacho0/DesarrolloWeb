/* THIS es un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código */

// En el scope global this se refiere a la ventana(window)
console.log(this);

// En el scope local dentro de una función this hará referencia igualmente a window si no se tiene el use strict
function whatIsThis(){
    return this;
}

// Con use strict this nos regresará undefined si no tenemos nada a que haver referencia
function whatIsThisStrict(){
    'use strict'
    return this;
}

// Si creamos una variable de tipo objeto, podemos tomar sus propiedades con this desde dentro
const person = {
    name: 'Arturo',
    saludar: function(){
        let text = document.querySelector("#texto");
        text.innerHTML = "Hola, me llamo " + this.name;
    }
};

console.log(whatIsThis());
console.log(whatIsThisStrict());
person.saludar();