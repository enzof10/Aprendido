import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data }) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* si no hay datos mando una fila de 3 columnas que diga no hay datos */}
                    {data.length === 0?(<tr><td colSpan="3">Sin datos</td></tr>
                    ):(
                    data.map(caballero=><CrudTableRow caballero={caballero}/>)
                    )}{/*si no le digo que haga un map y renderize todos los datos*/}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
