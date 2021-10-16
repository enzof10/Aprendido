var nombre = "juan";
var apellido =  "perez";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "carlos" + " " + "lara";
console.log(nombreCompleto2);

// si pongo numero con cadena se concatena
// se evaluan de izquuiera a derecha
var x = nombre + 219;
console.log(x);

x = nombre + " " + (2 + 4);
console.log(x);

// lo que encuentre primero es lo que va a tomar como lo que tiee que ghacer
// se pueden sumar los primeros porque se evalua de izquierda a derecha
x = 2 + 4 + " " + nombre;
console.log(x);

// let para declarar una variable
// const para que sea siempre el mismo valor
// las literales son los valores que le asignamos a nuestras variables
// en este caso asignAMOS UNa loteral de tipo str
nombre = "juan";
// no es una buena practica
console.log(nombre);
var nombre = "otro";

// una vez que le asigno un valor ya no se puede modificar
const apellidoo = "Perez";

// +funcion o metodo es exactamente lo mismo
let nombreConLet = "Juan Perez";
console.log(nombreConLet);

let i, y;
i = 10, y = 20;
let z = i + y;
console.log(z);


// operadores and y or
// and && y or  ||

// operador ternario 
// se conoce como ternasrio porque tiene 3 partes
// primero tenemos la expresion booleana y despues los resultados por v o f
let resultado = (3 > 2)? "verdadero" : 12 ;

console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0)? "Numero par" : "Numero impar";
console.log(resultado);

// conversion de str a numero

let miNumero = "10";
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);
if(edad >= 18){
    console.log("Puede votar");
}
else{
    console.log("Muy joven para votar");
}

let resulll = (edad >= 18) ? "puede votar" : "Muy joven para votar"
console.log(resulll);

let edat = "18x"

console.log(typeof edat);
if ( isNaN(edat)){
    console.log("No es un numero")
}
else{
    if(edat >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}