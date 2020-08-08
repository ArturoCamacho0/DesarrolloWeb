// Void
/* El tipo void es un tipo que no retorna nada, está vacío */

// Tipo explicito
/* Explicitamente le indicamos el tipo al que pertenece la función */
function showInfo(user: any): any{
    console.log('User info ', user.id, user.username, user.firstname);
}

showInfo({ id: 1, username: 'ArturoCamacho0', firstname: 'Arturo' });

// Tipo inferido
/* Cuando no colocamos nada, TS infiere el tipo, en este caso void ya que no retornamos nada */
function showFormatedInfo(user: any){
    console.log('User info:', `
        id: ${user.id},
        username: ${user.username},
        firstname: ${user.firstname}
    `);
}

showFormatedInfo({ id: 1, username: 'ArturoCamacho0', firstname: 'Arturo' });

// Void como tipo de dato en una variable
let unusuable: void;

/* En el strict mode no se puede asignar null o undefined a un tipo void */
unusuable = null;
unusuable = undefined;

// Tipo never
/* El tipo never se utiliza cuando queremos lanzar un error o cuando nunca retornan un valor */
function handleError(code: number, message: string): never{
    throw new Error(`${message}. Code: ${code}`);
}

try{
    handleError(404, 'Not found');
}catch(error){}

function sumNumbers(limit: number): never{
    let sum = 0;

    // Ciclo infinito
    while(true){
        sum += 1;
    }
}

sumNumbers(10);