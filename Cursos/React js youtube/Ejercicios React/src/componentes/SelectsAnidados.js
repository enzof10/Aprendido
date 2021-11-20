import SelectsList from './SelectsList'
import React, { useState } from 'react'


const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");

    return (
        <div>
            <h2>Selects Anidados</h2>
            <h3>Argentina</h3>
            <SelectsList
            title="provincias"
            url="https://apis.datos.gob.ar/georef/api/provincias"
            // va a capturar el valor mediante el evento y value y lo asigna a state
            handleChange={(e)=>{setState(e.target.value)}}
            />
            {/* si esta variable no tiene info no carga el resto */}
            {state &&
            <SelectsList
            state={state}
            title="municipios"
            url={`https://apis.datos.gob.ar/georef/api/municipios?provincia=${state}&campos=id,nombre&max=200`}
            handleChange={(e)=>{setTown(e.target.value)}}
            />}
            {/* para ver como se actualizan las variables */}
            <pre>
                <code>
                    {state} - {town}
                </code>
            </pre>
        </div>
    )
}

export default SelectsAnidados
