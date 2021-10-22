function miFuncion1(){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2");
}


miFuncion1();
miFuncion2();

// funciones de tipo call back
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, imprimirSuma){//en este momento nuestro parametro apunta a la funcion imprimir
    let res = op1 + op2;
    imprimirSuma(`Resultado: ${res}`);
}
// no tenemos que poner parentesis poruqe es un objeto tambine una funcion
sumar(4, 4, imp);
// manda como referencia una funcion

// llamadas asincronas con uso de setTimeout
function miFuncionCallBack(){
    console.log("Saludo asincrono 1 desp de 3 segundos");
}

// las call back se y asincronas se pueden ejecutar en paralelo
// primero recibe function tipo call back
// cuando pasamos una funcion como referencia no tenemos que poner parentesis, solo el nombre
setTimeout(miFuncionCallBack, 3000);//despues de 3 segundos

setTimeout(function(){
    console.log("Saludo asincrono 2 desp de 7 segundos")
}, 7000);

setTimeout( () => console.log("Saludo asincrono 3 flecha "), 1000);

