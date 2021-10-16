// para avisar que queremos reservar espacio en memroia

let persona2 = new Object();
// las propiedades se asignan de arriba hacia abajo
persona2.nombre = "Carlos";
persona2.segundoNombre = "Segundo";
persona2.direccion = "Falsa 1234";
persona2.telefono = 1213112;

console.log(persona2);
console.log(persona2.telefono);


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
// acceder a las propiedades como si fuerse un arreglo
console.log(persona["apellido"]);

for( propiedad in persona){
    console.log( propiedad );
    console.log( persona[propiedad] );
}

persona.tel = 21211212;
console.log(persona);
delete persona.tel;
console.log(persona);

console.log( persona.nombre + ", " + persona.apellido);
// o podermos mostrar iterando

for( algunaPropiedad in persona){
    console.log(persona[algunaPropiedad]);
}

// otra forma es con metodo values pero devuelve las propiedades como un array
let personaArray = Object.values( persona);
console.log(personaArray);

// otra forma es convirttiendo el objeto a una cadena
let personaString = JSON.stringify( persona);
console.log(personaString);


// metodos get y set 
// son las mejores practicas para acceer y modificar las propieaddes
// get = obtener
// set = modificar
let alguien = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@hotmail.vom",
    edad: 28,
    idioma: "es",
    // vamos a agregar un metodo get para acceder a la informacion de nuestro objeto
    get lang(){
       return this.idioma.toUpperCase();
    },
    // set se usa para modificar los valores de los atributos de nuestros objetos
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        // this es un apuntador al objeto que se esta trabajando en el momento
        return this.nombre + " " + this.apellido;
    },
    mailEdad: function(){
        return "Email: " + this.email + " ,Edad: " + this.edad;
    }
}
console.log(alguien.nombreCompleto);

// get se usa para ver y por eso no modifica en primera opcion el idioma pero si lo muestra en mayuscula
console.log(alguien.lang);
console.log(alguien.idioma);

// aca llamo al metodo set y lo modifico para que idioma se guarde en toUpperCase
alguien.lang = "en";
console.log(alguien.idioma);
