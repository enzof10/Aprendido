import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ dbCrudApp, setDataToEdit, deleteData}) => {
    return (
        <div>
            <h3>Tabla de datos{console.log(dbCrudApp)}</h3>
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
                    {dbCrudApp.length === 0?(<tr><td colSpan="3">Sin datos</td></tr>
                    ):(
                    dbCrudApp.map(caballero=><CrudTableRow
                        key={caballero.id} 
                        caballero={caballero}
                        setDataToEdit={setDataToEdit}
                        deleteData = {deleteData}
                        />)
                    )}{/*si no le digo que haga un map y renderize todos los datos*/}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
