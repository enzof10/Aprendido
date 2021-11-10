import React from 'react'

const CrudTableRow = ({caballero, setDataToEdit,deleteData}) => {
    // desestructura los atributos de los objetos caballero
    let {name, constellation, id}= caballero;
        return (
            <tr>
                <td>{name}</td>
                <td>{constellation}</td>
                <td>
                    {/* estas son las filas de caba objeto caballero asique cuando clickeemos
                    va a pasar a setdatatoedit el caballero*/}
                    <button onClick={()=> setDataToEdit(caballero)}>Editar</button>
                    {/* le paso el id de la fila en la que estemos al componente padre en CrudApp */}
                    <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
            </tr>
    )
}

export default CrudTableRow
