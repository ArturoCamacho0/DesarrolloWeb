interface Interface1{
    prop1: number
}

interface Interface2{
    prop2: number
}

// En la intersección de tipos se necesita inicializar los dos o más valores que existen, como si fuera un operador lógico and
type interfaceMix = Interface1 & Interface2;

/* const interfaceMix: interfaceMix = {
    prop1: 10 <- Aquí faltaría la propiedad 2
} */


// Aquí ya estamos incluyendo las dos propiedades
const interfaceMix: interfaceMix = {
    prop1: 10,
    prop2: 5
}