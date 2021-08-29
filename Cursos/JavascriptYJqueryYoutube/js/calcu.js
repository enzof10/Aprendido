var cifra=0;
var acumulado=0;
var operacion="si";
var Sol="no";
var op="lo";
function display_numeros(numero){
    document.getElementById("display").value=cifra+numero;
    cifra=document.getElementById("display").value;
}

function operar(sa){
    operacion="si";
    op=sa;
    igualar();
    cifra="";
  }
function igualar(){
    alert(acumulado);
    if(operacion=="no"){
        alert(acumulado);
        Sol=parseInt(cifra)+parseInt(acumulado);
        document.getElementById("display").value=Sol;
         }
    else{
        if(op=="+"){
        Sol=parseInt(cifra)+parseInt(acumulado);
        document.getElementById("display").value=Sol;
        acumulado=Sol;
        operacion="no";
        }
        }           
        }