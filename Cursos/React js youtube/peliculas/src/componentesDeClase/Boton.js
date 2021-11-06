import React from "react";

export default function Boton(){
    const saludar = () =>{
        console.log("Hola Enzo");
    }
    return(
        <div>
            <button onClick={saludar}>Saludar</button>
        </div>
    )
}