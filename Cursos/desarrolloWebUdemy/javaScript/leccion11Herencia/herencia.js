
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
        return this.nombreCompleto();
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

