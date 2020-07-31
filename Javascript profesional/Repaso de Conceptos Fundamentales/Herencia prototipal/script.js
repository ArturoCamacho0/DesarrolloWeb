function Hero(name){
    this.name = name;
}

Hero.prototype.saludar = function(){
    console.log("Hola, soy " + this.name);
}

const goku = new Hero("Goku");
goku.saludar();

// Los objetos creados también tienen las propiedades y métodos del objeto global this
console.log(goku.toString);

// Con hasOwnProperty() podemos saber si la propiedad existe en el objeto
/* En este caso name si es una propiedad de Hero */
console.log('hasOwnProperty("saludar")', goku.hasOwnProperty('name'));
/* saludar no es una propiedad de Hero, ya que esta propiedad viene por herencia */
console.log('hasOwnProperty("saludar")', goku.hasOwnProperty('saludar'));

// Con el siguiente método podemos sacar la propiedad de prototipo del objeto donde se encuentran las funciones
const objeto = Object.getPrototypeOf(goku);
console.log(objeto);