/*
IIFE - Immediatly Invoked Function Expressions
Esta función se llama automáticamente sin ser llamada externamente
*/
(function imprimirHola(){
    console.log("Hola");
})();


// Un closure básicamente es una funcion que retorna otra función, podríamos tomarlo como un objeto con métodos
function creaFunciones(){
    var nombre = 'Arturo'

    // Esto es un closure, una función dentro de otra función
    function muestraNombre(){
        console.log(nombre);
    }

    // La función regresa el closure
    return muestraNombre;
}

var funcion = creaFunciones();
funcion();