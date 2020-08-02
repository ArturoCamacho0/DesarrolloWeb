type dni = number;

// Una interfaz es casi como una clase, sólo que este en vez de definir a un objeto, definen un comportamiento o estructura
interface Persona{
    // Si incluimos el signo de interrogación después de la variable podemos decirle que esa propiedad es opcional
    altura?: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni: dni;
}

// Podemos crear un objeto de tipo persona, pero este requiere integrar las propiedades de la interfaz
const Persona: Persona = {
    altura: 1.8,
    edad: 21,
    nombre: 'Arturo',
    apellido: 'Camacho',
    dni: 123
}