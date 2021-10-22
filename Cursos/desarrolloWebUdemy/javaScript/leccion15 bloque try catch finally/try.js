"use strict"

try {
     let x = 10;
    // miFuncion();
}
// catch captura cualquier error
catch(error){
    // nos manda el tipo de error y el error
    console.log(error);
}
// finally es opcional
finally{
    // siempre se va aejecutar si o si
    console.log("Termina la revision de errores");
}
// se ejecuta igual el programa aunque tenga error
console.log("Continuamos...");