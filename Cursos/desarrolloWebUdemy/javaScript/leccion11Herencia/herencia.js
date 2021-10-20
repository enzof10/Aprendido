
class Persona{
    
    // atributo estatico solo accesible desde la clase persona
    static contadorPersonas = 0;
    // creamos un metodo estatico para solo leer 
    static get MAX_OBJ(){
        return 5;
    }

    // agregamos un constructor
    // es similar a la sintaxis de un metodo
    email = "Valor default email";//atributo asociado a los objetos
    constructor(nombre, apellido){
        // se acostumbra usar uun _ antes del nombre de la propiedad
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idpersona = ++Persona.contadorPersonas;
        }
        else{
            console.log("Se han superado el maximo de objetos permitidos");
        }
    }
    // get para leer o set para modificar con 
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }   
    get apellido(){
        return this._apellido;
    }
    set apellido(nombre){
        this._apellido = nombre;
    }
    // dentro de una clase no es necesaria la palabra function ni comas
    nombreCompleto(){
        return this._nombre + " " + this._apellido;

    }
    // modificamos el metodo heredado de la clase objet.prototype
    toString(){
        //se aplica polimorfismo(multiples formas en tiempo d ejeccucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o tipo hijo
        return this.idpersona + " "+this.nombreCompleto();
    }
    // static se asocia con una clase pero no con los objetos
    static saludar(){
        console.log("Saludo desde clase padre Persona ")
    }
    static saludar2(persona){
        console.log("Saludos desde: ", persona.nombre );
    }
    static saludar3(algo){
        console.log("Saludos desde saludar 3 ",algo)
    }

}
let persona1 = new Persona("Juan", "Perez")
// clase hija
// Object.prototype.toString. todos los objetos heredan estos metodos
// pero podemos modificarlos desde otras clases
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al consturctor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this.departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
}

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);


//muestra objet objet si no modificamos el metodo toString
console.log(empleado1.toString()); 
// como vemos podemos mandar a llamar desde un objeto un metodo definido en la clase padre o en la clase hija
console.log(persona1.toString());
// se conoce como polimorfismo
// accede dependiendo desde que objeto a distintos metodo definido en la clase
console.log(empleado1.toString());//muestra sistemas
// arriba con una referencia de la clase hija
// abajo con referencia de la clase padre
console.log(persona1.toString());//aca no muestra sistemas



// accedemos a los mismos metodos de la clase padre
console.log(empleado1.nombre);//metodo get
empleado1.apellido = "Otro apellido";//metodo set de la clase padre

console.log(empleado1.apellido);//metodo get de apellido clase padre
console.log(empleado1.nombreCompleto());//heredamos el metodo de la clase padre
// sobreescritura, modificar el comportamiento de metodos de la clase padre

// persona1.saludar(); no es posible llamar a un metodo stattic desde un objeto
Persona.saludar();

// pero le podemos pasar como argumentos un objeto
Persona.saludar2(persona1);
Persona.saludar3(persona1.nombre);

Empleado.saludar2(empleado1);
Persona.saludar3(empleado1.nombre);

console.log(persona1.idpersona);
console.log(Persona.contadorPersonas);

// las clases hijas tambien heredan los atributos estaticos pero no asi los objetos

console.log(persona1.email);
console.log(empleado1.toString());

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

// podemos acceder porque es un metodo get
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);//no se modifica porque no tiene metodo set

let persona3 = new Persona("MAriano", "Lara");
let persona4 = new Persona("algou", "Toledo");
let persona5 = new Persona("Laura", "Quintero");
// al superar la cantidad de objetos que le permiti me tira por consola el msj
// que llego al limite de objetos permitidos

console.log(persona5.toString());//el id indefinido porque no se le creo ninguno
console.log(persona3.toString());
console.log(persona4.toString());