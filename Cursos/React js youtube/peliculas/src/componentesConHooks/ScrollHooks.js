import React, { useState, useEffect } from 'react';


export default function ScrollHooks(){

    const [scrollY, setSrollY] = useState(0);

    
    useEffect(()=>{
        // Se va a ejecutar cada vez que se necesite renderizar este componente
        // va air detectando el dezplazamiento de mi scroll    
        console.log("Fase de montaje");
    })
    return(
        <>
        <h2>Hooks-usseEffect y el ciclo de vida</h2>
        </>
    )
}