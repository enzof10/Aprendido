contador = 0
do{
    console.log(contador);
    contador++;
}
while(contador<3);
console.log("find e ciclo do while");

for(let contar = 0 ;contar <4 ; contar++){
    console.log(contar);
}

for(let cont = 0; cont <= 10; cont ++){
    if(cont % 2 == 0){
        console.log(cont);
        break;

    }
}
inicio:
for(let con = 0; con <= 10; con++){
    if(con % 2 !== 0 ){
        continue inicio;//ir a la siguiente iteracion del contador
    }
    else{
        console.log(con)
    }
}
// el uso de etiquetas no es recomendable
