let persona1 = {
    nombre: "juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        // no usamos this en la funcion porque son parametros que se reciben directamente y no son del objeto persona1
        return titulo +" "+ this.nombre + " " + this.apellido+ " " + tel;
    }
}
// aunque no defina el metodo nombre completo igual podemos usar el metodo de persona1
let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

// uso de call para usar el metodo nombreCompleto  con los datos de persona2

console.log(persona1.nombreCompleto("Lic", "33883827"));

// el parametro que recibe el metodo call que es el objeto de donde vamos a tomar los atributos
console.log(persona1.nombreCompleto.call(persona2));
console.log(persona1.nombreCompleto.call(persona2, "ing", "09981829"));

