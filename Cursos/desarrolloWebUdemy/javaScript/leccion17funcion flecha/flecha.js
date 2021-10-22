miFuncion();

function miFuncion(){
    console.log("Saludo desde mi function");
}

// miFuncionFlecha();
const miFuncionFlecha = ()=> {
    // esto es un objeto y aestamos asignando la referencia a esa variable
    console.log("Saludos desde mi funcion flecha");
} 

// no se aplica el concepto de hoisting
// sirve para asignar un valor a una variable
// con la variable let no aplica el concepto de hoisting
// si usamos const ya no podemos modificar esa referencia
// con let si
miFuncionFlecha();

const felchaFunction = () => console.log("Algo");
felchaFunction();

const saludar = () => {
    return "Saludos desde function flecha";
}
console.log(saludar());

const saludar2 = () => "Saludar 2";
console.log(saludar2());

const regresaObjeto = () => ({nombre: "juan", apellido: "lara"});
console.log(regresaObjeto());

// si es solo un parametro podemos omitir el parentesis
const funcionCon1Parametro = mensaje => console.log(mensaje);
funcionCon1Parametro("Saludos con parametro1");
console.log(funcionCon1Parametro("hol"));//undefined
console.log("hol");//hol

const funcionVariosParametros = (op1, op2) => op1 + op2;
const funcionVariosParametros2 = (op1, op2) =>{
   return op1 + op2;
} 
console.log(funcionVariosParametros(2,3));

