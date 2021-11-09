import React from 'react';

export default function Propiedades(props){
    
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano? "Verdadero": "falso"}</li>
                <li>{props.objeto.nombre}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
                <li>{typeof props.arreglo}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>Cuadrado de 7: {props.funcion(7)}</li>
                <li>cuadrado del arreglo: {props.arreglo.map(props.funcion)}</li>

        
            </ul>
        </div>
    );
}


Propiedades.defaultProps={
    porDefecto:"una por defecto"
};