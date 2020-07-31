function saludar(){
    console.log("Hola, me llamo " + this.name + this.apellido);
}

const persona = {
    name: 'Arturo',
    apellido: 'Camacho'
};

function despedir(des){
    console.log(des + this.name);
}

// Método call
/* Este método ejecuta una función, recibiendo como primer argumento el objeto this.
Lo siguiente son los argumentos que se le pasan a la función.
Establecemos el objeto this en resúmen. */
saludar.call(persona);
despedir.call(persona, "Adios, ");


// Método apply
/* El método apply tiene la mima funcionalidad que call, pero los parametros se pasan en un array. */
despedir.apply(persona, ["Hasta la próxima "]);


// Método bind
/* Bind construye una nueva función que va a tener el this aplicado,
al construir una nueva función hay que llamarla para que funcione. */
const persona2 ={
    name: 'Josef',
    apellido: 'Hernandez'
}

const josefSaluda = saludar.bind(persona2);
josefSaluda();

// Currying
/* Si quieremos pasar argumentos, podemos hacerlo en la asignación o en la llamada de la función */
const josefDespide = despedir.bind(persona2, "Hasta la próxima"); // <- Aquí se pasan argumentos despues del objeto
josefDespide(); // <- Aquí también se pueden pasar los argumentos como si fuera una instancia normal