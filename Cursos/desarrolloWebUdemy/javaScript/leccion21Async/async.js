// al poner la pabalabra async antes de de la definicion de un metodo
// significa que esta obligado a regresar una promesa

// significa que una funcion regresa una promesa
// una funcion la podemos convertir en una promesa simplemente agregando async
// y lo que retorne lo podemos consumir por medio de la funcion then
// y mandando a llamar nuestra funcion que nos regresa una promesa
async function miFuncionConPromesa(){
    return "Saludos con promesa y async"
}

// para consumir esta promesa
// como es una funcion normal tenemos que usar parentesis y no el punto
miFuncionConPromesa().then(valor => console.log(valor));