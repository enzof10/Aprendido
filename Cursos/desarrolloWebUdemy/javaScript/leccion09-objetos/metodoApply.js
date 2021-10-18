let persona1 = {
    nombre: "juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, telefono){
        // no usamos this en la funcion porque son parametros que se reciben directamente y no son del objeto persona1
        return titulo +" "+ this.nombre + " " + this.apellido+ " " + telefono;
        // return this.nombre + " " + this.apellido;
    }
}
let persona2 = {
    nombre: "carlos",
    apellido: "Lara"
}

// mandar a llamar un metodo en un objetodo que tiene definido cierto metodo
console.log(persona1.nombreCompleto("lic", "7787887"));

// con apply los agrumentos se pasan con un array
let arreglo = ["Ingeniero", "23491201"]
console.log(persona1.nombreCompleto.apply(persona2, arreglo));