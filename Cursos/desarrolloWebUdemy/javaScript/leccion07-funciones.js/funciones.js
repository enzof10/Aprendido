// import funciones from 'funciones';
// la funcion se la conoce como hosting
function miFuncion(a, b){
    console.log(arguments);
    console.log(arguments.length);
    console.log("Suma: "+ (a + b));
}
// los bloques de codigo no terminan con ;
// las lineas de ejecucucion si deben terminar en ;

miFuncion(3, 7);
miFuncion(3, 4);

function otraFuncion(a, b){
    z = a + b;
    return z;
}
console.log(otraFuncion(1,2));

// funciones de tipo expresion(se le asignan a una variable)
let sumar = function(a, b){return a + b};
console.log(sumar(2,2));


// funciones self invoking
// es la unica vez que se puede llamar
// puede servir para proyectos web en el momento que carga el programa
(function(a, b){
    console.log("Ejecutando la funcion: "+ (a + b));
})(3, 4);


console.log(typeof miFuncion);
// ademas de ser de tipo funcion puede ser un objeto con propiedades y metodos asociados a cad uno de los objetos

// con el metodo toString podemos asignar la function como str
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
// las funciones pueden ser objetos con propiedades y metodos

