// metodo constructor de objetos que empiecen con mayuscula
function PPPersona(nombre = "por default", apellido, email){
    this.nombre = nombre;
    // que el nombre del parametro al nombre de la propiedad sean iguales es una practica comun
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        // this funciona sobre los valores apellido nombre de objetos que se trabajan en el momento
        return this.nombre + " " + this.apellido;
    }
}

// padre es un objeto
let padre = new PPPersona("juan", "Perez", "jpere@hotamil.com");
// PPPersona es un metodo que permite crear un nuevo objeto de tipo persona
console.log(padre);

// madre tiene las mismas propiedades con distintos valores
let madre = new PPPersona("Zuni", "Borda", "zuny@gamil,com");
console.log(madre);
// madre y padre ocupan dos posiciones en memoria
// accedo al nombre del objeto padree y lo cambio
padre.nombre = "Otro nombre";
console.log(padre);
// accedemos al metodo de nombre completo
// this trabaja con los valores de los objetos de ese momento
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

// usar new no va a ser necesarios a veeces

// var miObjeto = new Object();
let miObjeto = {};//esta forma seria la mas comun

let miCadena1 = new String("hola");//esta es la funcion constructor del tipo string
let miCadena2 = "hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];

let mifunctionnn = new function(){};
let mifunction3 = function(){};

// si agregamos propiedades direcatamente desde un objeto como ej padre
// esa propiedad solo la va a tener el objeto padre y no el resto

padre.telefono = "1213131";
console.log(padre.telefono);
console.log(madre.telefono);

// si queremos agregar una propiedad para todos los objetos que se estan creando sin hacerlos con el constructor
// tenemos que usar prototype

PPPersona.prototype.telefono = "178777843";//este seria un valor por default
console.log(padre.telefono);
console.log(madre.telefono);





