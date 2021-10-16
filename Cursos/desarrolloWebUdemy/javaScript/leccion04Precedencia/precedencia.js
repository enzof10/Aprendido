let x = 7;
let y = 8;
let z = ++x + y--;
console.log(z);

let numero = 3;

let numeroTexto = "Valor desconocido"

switch(numero){
    case 1:
        numeroTexto = "numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    default:
        numeroTexto = "Caso no encontrado";
}
console.log(numeroTexto);