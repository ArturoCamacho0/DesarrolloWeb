// Podemos unir dos o más tipos de variable en los alias
type sumaParameter = string | number;
type sumaReturnType = string | number;

function suma(n1: sumaParameter, n2: sumaParameter): sumaReturnType{
    // Al no saber que tipo de valor estamos regresando, marcará error, por lo que hay que definirlo
    /* return n1 + n2; <- Incorrecto */
    return Number(n1) + Number(n2);
}

// Interfaces
interface Interface1{
    prop1: number;
}

interface Interface2{
    prop2: number;
}

// Podemos tomar igualmente como propiedades dos interfaces con sus propiedades
type interfaceMix = Interface1 | Interface2;

const interfaceMix: interfaceMix = {
    prop1: 2
}