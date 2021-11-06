import React, {useState, useEffect} from 'react';

function Reloj({hora}){
    return <h3>{hora}</h3>;
}

export default function RelojHooks(){
     const [hour, setHoour] = useState();
     const [visible, setVisible] = useState(false);

     useEffect(()=>{
         let temporizador;

         if(visible){
             temporizador = setInterval(() => {
                 setHoour(new Date().toLocaleTimeString())
                 
             }, 1000);
         }else{
             clearInterval(temporizador);


            }
            
            //  esto retorna cuando detecta que se elimina el comoonente reloj
         return()=>{
                 console.log("Fase de desmontaje")
             }
    //   useEffect no tiene mucho sentido si no hay variables que controlar
     }, [visible])

    return(
        <>
        <h2>Reloj con Hooks</h2>
        {visible && <Reloj hora={hour} />}
        {/* {console.log("fuera de reloj")} */}
        {/* tengo que pasar al evento onclick una arrow function
        para que reciba parametros y no se llame de una a diferencia del reloj
        de componente de clases */}

        {/* podemos usar usesefecc de tal manera que solo se ejecute cuando ciertas varibale cambien */}
        <button onClick={()=>setVisible(true)}>Iniciar</button>
        <button onClick={()=>setVisible(false)}>Detener </button>
        </>
    )
}