// definimos la variable con const para wue no se pueda cambiar lareferencia el valor
// no es necesario usar la palabra function
// se asigna un espacio en memoria
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 7);
console.log(resultado);

// parametros y argumentos no son lo mismo
// las variables que tiene una function son parametros
// los argumentos son lo que le pasamos a la function
// le puedo dar a los parametros por defautl
let sumar = function(a = 4, b = 7){
    console.log(arguments[0]);
    console.log(arguments[1]);
    // agrego un parametro que no esta definido
    return a + b + arguments[2];
}
// aca se ve la diferencia entre parametro y arumento
// los argumentos siguen siendo undefined pero igual saca la cuetna
resultado = sumar("b","a",2);
console.log(resultado);



// asi podemos pasar todos los argumentos que querramos sin definir parametros
let resultadoFinal = sumarTodo(2, 3, 7, 8, 9);
console.log(resultadoFinal);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

// paso por valor es cuando usamos tipos que no son objetos
// valores de tipo primitivo, o tiene propiedaddes ni metodos
let x = 10;

// metodo para intentar cambiar el valor desde el metodo
// solamente se va a pasar una copia el valor entonces no se va  poder
function cambiarValor(c){
    c = 20;
    console.log(x);
    console.log(c);
    return c
}

cambiarValor(x);//10
// esto pasa porque asigno una copia de su valor
// se conoce como paso por valor
// no se produce una relacion entre las dos variables
console.log(x);
// console.log(a);
// console.log(c); no defined


// paso por referencia, por un objeto que puede tener propiedades y metodos
// la variable persona almacena una referencia de ese Object
const persona = {
    // usamos : para asignar valor a esta propiedad
    nombre: "Juan",
    apellido: "Perez"
}
persona.apellido = "algou";
console.log(persona.apellido);
function CambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}
// paso por referencia
CambiarValorObjeto( persona );
console.log(persona);
