type callbackError = Error | null;
// Con el Function Type podemos definir la estructura de una función con sus parametros y lo que va a recibir
type callback = (error: callbackError, response: Object) => void;
type sendRequest = (callback: callback) => void;


const sendRequest: sendRequest = (callback: callback): void => {
    if(callback){
        callback(null, { 'message': 'Todo salió como lo planeamos' });
    }
}