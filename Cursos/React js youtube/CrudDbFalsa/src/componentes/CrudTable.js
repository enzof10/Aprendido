import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ dbCrudApp, setDataToEdit, deleteData}) => {
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
                    {dbCrudApp.length > 0?
                    (dbCrudApp.map(caballero=><CrudTableRow
                        key={caballero.id} 
                        caballero={caballero}
                        // le pasamos la funciones setDataToEdit y deleData ya desestructuradas al hijo crud tableRow
                        setDataToEdit={setDataToEdit}
                        deleteData = {deleteData}
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
