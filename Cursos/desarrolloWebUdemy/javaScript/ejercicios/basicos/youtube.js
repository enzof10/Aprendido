function mayorMenor(numero1, numero2){
    if (numero1 == numero2){
        console.log("son iguales")
    }
    else if(numero1 < numero2){
        console.log("El numero 1 es mayor")
    }
    else{
        console.log("El numero 2 es mayor")
    }
}
let numero1 = prompt("Ingrese un numero");
mayorMenor(numero1 ,numero2);