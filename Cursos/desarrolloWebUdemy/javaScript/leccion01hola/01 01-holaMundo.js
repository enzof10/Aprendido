var mensaje = "hello word";

console.log("Hola Mundo desde JavaScript");

// tipo de dato objet
var objeto = {
    nombre : "juan",
    apellido : "perez",
    telefono : "23121313"
}
console.log(objeto);

var nombre = "carlos";
console.log(nombre, typeof nombre);
console.log(typeof objeto);
// se puede cambiar el tipo de dato de la variable ne cualqier momento

var bandera = false;
console.log(typeof bandera);

// tipo de dato function
function miFuncion(){

}
console.log(miFuncion);

// tipo de dato simbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo, typeof simbolo);

// tipo de clase es una function
// clase tipo personaç
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona, typeof Persona);

// tipo de dato undefined 
// se le puede asignar a una variable pero tambien es un tipo de dato 
var x;
console.log(x, typeof x);
x = undefined;
console.log(x, typeof x);

// null = ausencia de valor
// null es un objeto
var y = null;
console.log(y, typeof y);

// los arrays son de tipo objeto
var autos = ["BMW","Audi", "Volvo"]
console.log(autos, typeof autos);


var z = "";
console.log(typeof z, z);
console.log(z);

