import { useContext } from 'react';
import CrudContext from '../context/CrudContext';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loaders from './Loaders';
import Message from './Message';


export const CrudApi = () => {
    const { db, loading, error } = useContext(CrudContext)

    return (
        <div>
            <h2>CRUD API CON CONTEXT</h2>
            {/* en movil va a estar a una columna y en pc en dos */}
            <article className="grid-1-2"> 
                {/* el formulario ya va a recibir 4 propiedades, 1 valor y 3 funciones */}
                <CrudForm
                />
                {/* renderizado condicional de loading, solo cuando sea verdadera */}
                {loading && <Loaders/>}
                {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3747"/>}
                {/* la tabla ademas de los datos necesita la funcion que va a elminitar los datos 
                para los botones */}
                {/* si el valor de la base de datos es nullo no se renderiza */}
               {db && <CrudTable
                />}
            </article> 
        </div>
    )
}

export default CrudApi;