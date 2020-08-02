// Las promesas son valores que aún no conocemos, estas pueden ser sincronas y asincronas
/* Tienen 3 estados
- Pending: este es el estado en el que se encuentra una promesa recien creada.
- Fullfilled: cuando la promesa se realiza de manera existosa pasa a este estado.
- Rejected: si ocurre un error en la promesa, esta pasará a este estado */
async function getDogs(){
    const url = 'https://dog.ceo/api/breeds/list/all';
    const response = await fetch(url);
    const data = await response.json();

    return data;
}