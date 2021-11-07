import React, { useState } from 'react'
import {useFetch} from "..//hooks/useFetch"
// solo las peticiones que hagamos como ejemplos
export default function HooksPersonalizados(){
    console.log(useFetch())
    return(
        <>
            <h2>Hooks- Hooks Personalizados</h2>
        </>
    )
}