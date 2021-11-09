import React, { useState, useEffect } from 'react';
// varibale de estado para controlar y para ver el ciclo de vida

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);

    // si quiero simular la fase de montaje 
    useEffect(()=>{
        console.log("Fase de Montaje")
    },[])

    // si no tiene definido el segundo parametro va a ser como un componentDidUpdate
    // es decir cada vez que se rendereize el compoente se ejecuta
    useEffect(()=>{
        // Se va a ejecutar cada vez que se necesite renderizar este componente
        // va air detectando el dezplazamiento de mi scroll  
        // useEfect asi sseria la fase de ACTUALIZACION!
        console.log("Moviendo el scroll (solamente cuando hay scroll porque se cambia el valor)");

        const detectarScroll =()=>{
            // propiedad que me dice cuqantos pixeles me he dezpladado de la barra del navegador
            setScrollY(window.pageYOffset)
        }
        window.addEventListener("scroll", detectarScroll);
        // SI NO PONGO EL SEGUNDO PARAMETRO USEEFEST SE VA A EJECUTAR CADA VEZ QUE SE 
        // RENDERIZA UN COMPONENTE

        // aca le digo: cuando este componente hooksSroll ya no exista retorne esto
        // donde me voy a desuscribir a este evento para que no ocupe memoria
        return()=>{window.removeEventListener("scroll", detectarScroll);}
    } /*, aca iria el segundo parametro que tendria cambios */, [scrollY])
    // podemos tener tantos ussefec como necesitamos

    useEffect(()=>{
        console.log("Fase de actualizacion")

    })
    useEffect(()=>{
        // cuando le agrego un return le digo que simule la fase de desmontaje
        // sirve para Desuscribirte, desconectqarte, limpiar
        // se va a ejecutar solo cuando se elemimine el elemento en el cual esta
        return()=>{
            console.log("Ahora si se elimino")
        }
    })
    return(
        <>
           <h2>Hooks-usseEffect y el ciclo de vida</h2>
           <p>Scroll Y del navegador{scrollY}px</p>
        </>
    )
}