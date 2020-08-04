function log(target, key) {
    console.log(key + ' se ha llamado');
}

class Persona{
    private name: string;

    constructor(name:string){
        this.name = name;
    }

    // El decorador aplica el código de una función que se creó y se llamó con el arroba
    @log // <- Así se coloca un decorador
    sayMyName(){
        console.log(this.name);
    }
}

const persona: Persona = new Persona('Arturo');
persona.sayMyName();