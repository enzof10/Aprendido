import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext'
import CrudTableRow from './CrudTableRow'

const CrudTable = () => {

    const {db} = useContext(CrudContext)
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
                    {db.length > 0?
                    (db.map(caballero=><CrudTableRow
                        key={caballero.id} 
                        caballero={caballero}
                        />))
                        :
                    (<tr><td colSpan="3">Sin datos</td></tr>)}
                        {/*si no le digo que haga un map y renderize todos los datos*/}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
