import React from 'react'
// desestructuramos las funciones que vienen como propiedades del padre
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
                    {/* a la hora de apretar edtitar pase los datos al formulario, va a propagar hacia los padres
                    la accios para poder afectar al formulario */}
                    <button onClick={()=> setDataToEdit(caballero)}>Editar</button>
                    {/* le paso el id de la fila en la que estemos al componente padre en CrudApp */}
                    {/* osea propaga hacia arriba el id */}
                    <button onClick={()=> deleteData(id)}>Eliminar</button>
                </td>
            </tr>
    )
}

export default CrudTableRow
