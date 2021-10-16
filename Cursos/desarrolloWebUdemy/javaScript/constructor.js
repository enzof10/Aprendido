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

