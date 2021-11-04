import React from "react";

export default function Boton(){
    const saludar = () =>{
        console.log("Hola Enzo");
    }
    return(
        <div>
            <buuton onClick={saludar}>Saludar</buuton>
        </div>
    )
}