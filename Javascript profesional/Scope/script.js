// Scope global: tiene alcance en todo el script para ser llamada
var text = document.querySelector('#texto');

// funcion con el scope global
function cambiarTexto(){
    // Scope local: solo se puede ejecutar dentro de la función en la que fue creada
    function textoCambiado(){
        return "Se ha cambiado el texto";
    }

    // Se llama a la función local que solo se puede hacer desde donde fue creada
    text.innerHTML = textoCambiado();
}

// Llamamos a la función que tiene scope global
cambiarTexto()