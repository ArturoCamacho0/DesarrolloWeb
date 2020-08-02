// Podemos utilizar clases como si de Java se tratara
/* tenemos el keyword class para indicar que es una clase y su nombre */
class Transporte{
    // Podemos declarar las variables en forma privada, pública y protegida
    private velocidad: number;
    private formaDeMovilidad: string;

    // Podemos definir el constructor
    constructor(velocidad: number, formaDeMovilidad: string){
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad;
    }

    // También tenemos los setters y getters para las variables de la clase
    getVelocidad(){
        return this.velocidad;
    }

    setVelocidad(velocidad: number){
        this.velocidad = velocidad;
    }

    getFormaDeMovilidad(){
        return this.formaDeMovilidad;
    }

    setFormaDeMovilidad(formaDeMovilidad: string){
        this.formaDeMovilidad = formaDeMovilidad;
    }
}

// Instanciamos el objeto en una variable de tipo transporte
const transporte: Transporte = new Transporte(20, 'Por el suelo');

// Podemos heredar de la clase principal con extends
class Auto extends Transporte{
    private cantidadDePuertas: number;

    constructor(velocidad: number, formaDeMovilidad: string, cantidadDePuertas: number){
        super(velocidad, formaDeMovilidad);
        this.cantidadDePuertas = cantidadDePuertas;
    }

    // Así podemos redefinir un método de la clase padre
    getVelocidad(){
        return super.getVelocidad() + 10;
    }

    // Y extendemos otros métodos para esta clase
    getPuertas(){
        return this.cantidadDePuertas;
    }

    setCantidadDePuertas(cantidadDePuertas: number){
        this.cantidadDePuertas = cantidadDePuertas;
    }
}

// Instanciamos a la clase que heredó a transporte
const auto: Auto = new Auto(20, 'Por suelo', 4);