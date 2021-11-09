import React from 'react'

const CrudTableRow = ({caballero}) => {
    return (
            <tr id={caballero.id}>
                <td>{caballero.name}</td>
                <td>{caballero.constellation}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
    )
}

export default CrudTableRow
