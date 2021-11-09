import React from 'react';

// se recomienda ponerle el mismo nombre a la funcion y al componente
export default function HolaMundo(){
    return(
        // cuando creamos un componente es porque queremos reutilizarlo
        <div>
            <h1>Hola mundo</h1>
            <h2>Enzo Frias bo</h2>
        </div>
    )
}

function AdiosMundo(){
    return(
        <div>
            <h2>Adios</h2>
        </div>
    );
}
