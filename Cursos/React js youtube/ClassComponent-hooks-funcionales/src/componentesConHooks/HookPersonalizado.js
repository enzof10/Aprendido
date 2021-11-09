import React, { useState } from 'react'
import {useFetch} from "..//hooks/useFetch"
// solo las peticiones que hagamos como ejemplos
export default function HooksPersonalizados(){
    // console.log(useFetch())
    let url = "https://pokeapi.co/api/v2/pokemon/",
    url2="https://jsonplaceholder.typicode.com/users"
    let{data, isPending, error} = useFetch(url2)
    return(
        <>
            <h2>Hooks- Hooks Personalizados</h2>
            {/* para poder mostrar tengo que convertir a cadena de texto */}
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </>
    )
}