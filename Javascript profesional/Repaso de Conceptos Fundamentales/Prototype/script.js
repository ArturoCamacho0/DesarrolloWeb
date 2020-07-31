var buttong = document.getElementById("g");
var buttonn = document.getElementById("n");
var buttonl = document.getElementById("l");

// Prototype
/* El prototype nos sirve como una clase que tiene métodos y propiedades,
esto nos ayuda a repetir un bloque de código varias ocaciones. */
function Hero(name){
    // Con Object.create() podemos crear nuevos objetos
    /*  const hero = Object.create(Hero.prototype);
            Esto se volvería así cuando utilizamos el new:
        this = Object.create(Hero.prototype);
    */
    this.name = name;
}

Hero.prototype.saludar = function(){
    let texto = document.querySelector('#texto');
    texto.innerHTML = "Hola, soy " + this.name;
}


/* Con new estamos creando un nuevo objeto en vez de hacerlo en la clase */
buttong.addEventListener('click', () => {
    const goku = new Hero('Goku');
    goku.saludar();
});

buttonn.addEventListener('click', () => {
    const naruto = new Hero('Naruto');
    naruto.saludar();
});

buttonl.addEventListener('click', () => {
    const luffy = new Hero('Luffy');
    luffy.saludar();
});