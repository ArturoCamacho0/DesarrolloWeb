class Persona{
    private edad: number;
    private altura: number;
    private dni: string;

    constructor(edad: number, altura: number, dni: string){
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
}

class Alumno extends Persona{
    private matricula: string;

    constructor(edad: number, altura: number, dni: string, matricula: string){
        super(edad, altura, dni);
        this.matricula = matricula;
    }
}

// Un shape es la estructura de lo que se está representando en el objeto
let persona: Persona = new Persona(27, 1.69, '3661731');
let alumno: Alumno = new Alumno(21, 1.80, '1234', '4321');

// Por ejemplo, una persona no es un alumno, por lo que puede ser un alumno, tiene las propiedades para serlo
persona = alumno;
// Un alumno ya es una persona, por puede volver a hacerse persona
alumno = persona;