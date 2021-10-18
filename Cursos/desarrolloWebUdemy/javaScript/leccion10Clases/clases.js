// un objeto es una instancia de una clase
// una clase no tiene valores, es una plantilla
// antes creamos objetos del tipo persona con propiedades y metodos pero esto es una clase

class Persona{
    // agregamos un constructor
    // es similar a la sintaxis de un metodo
    constructor(nombre, apellido){
        // se acostumbra usar uun _ antes del nombre de la propiedad
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // get para leer o set para modificar con 
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}
// esto es una instancia de clase u objeto
let persona1 = new Persona("Juan", "Perez");
console.log(persona1.nombre);
// console.log(persona1);

// let persona2 = new Persona("Carlos", "Lara");
// console.log(persona2);
// llamamos el metodo set nombre y le pasamos el parametro de juan carlos
persona1.nombre = "Juan carlos";
// aca llamamos el metodo get
console.log(persona1.nombre);

// cuando trabajamos con clases no se aplica el concepto de hoisting
// primero hay que definirla para poder utilizarla
// a diferencia de funciones y variables tipo var

