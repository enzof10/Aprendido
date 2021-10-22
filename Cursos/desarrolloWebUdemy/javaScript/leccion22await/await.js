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


// espera el resultado de una promesa
// espera el resultado y trabaja con ese resultado
async function miFuncionConPromesaAwait(){
    let miPromesa = new Promise( resolver =>{
        resolver("Promesa con await");
    })

    console.log(await(miPromesa));
}
// await solo se puede usar dentro de una funcion declarada con async
miFuncionConPromesaAwait();

//promesas await, async y setTimeOut

async function funcionConPromesaAwaitTimeout(){
    console.log("Inicio de la promesa await y time outtt");
    let miPromesa = new Promise(resolver =>{
        setTimeout(() => resolver("promesa con await y timeut"), 3000)
    });
    console.log(await miPromesa);
    console.log("Final de la promesa, se imprime despues del await")
}
// sin async no podemos usar await
funcionConPromesaAwaitTimeout();