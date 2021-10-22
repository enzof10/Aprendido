// creamos un objeto de tipo promesa que recibe dos parametros
// osea mandamos dos argumentos de tipo call back
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if(expresion){
        resolver("Resolvio correcto");
    }
    else{
        rechazar("Se produjo un error");
    }
});

// lo que recibe then son dos funciones de tipo felcha como parametro
// valor y error son argumentos de las funciones flecha
// llamamos el metodo then
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
// la parte de error lo podemos manejar con metodo catch o como argumento como arriba
miPromesa.then( valor => console.log(valor)).catch(error=>console.log(error));

miPromesa.then( valor => {
    return console.log(valor);
}).catch(error=>console.log(error));

miPromesa
    .then( valor => console.log(valor))
    .catch(error=>console.log(error));

    