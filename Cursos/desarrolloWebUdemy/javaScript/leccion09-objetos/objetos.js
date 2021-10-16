// el primitivo no tiene propiedades y metodos
let x = 10;
console.log(x.toFixed);

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@hotmail.vom",
    edad: 28,
    // vamos a agregar un metodo para imprimir el nombre completo
    nombreCompleto: function(){
        // diz es un apuntador al objeto que se esta trabajando en el momento
    //    apunta a las propiedades dentro del objeto
        return this.nombre + " " + this.apellido;
    },
    mailEdad: function(){
        return "Email: " + this.email + " ,Edad: " + this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log(persona.mailEdad());