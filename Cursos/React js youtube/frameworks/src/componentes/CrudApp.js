import React,{useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
//  los datos los vamos a mandar a llamar de una base falsa porque va a ser un crud falso

const initialDb =[
    {id:1,
    name:"Seiya",
    constellation:"Pegaso"
    },
    {id:2,
    name:"Shiryu",
    constellation:"Dragon"
    },
    {id:3,
    name:"Hyoga",
    constellation:"Cisne"
    },
    {id:4,
    name:"Shun",
    constellation:"Andromeda"
    },
    {id:5,
    name:"Ikki",
    constellation:"Fenix"
    }
];

export const CrudApp = () => {    
    const [db, setDb] = useState(initialDb);

    // como actualizamos cada una de las operaciones, con funciones
    const [dataToEdit, setDataToEdit] = useState(null);
    // cuando este nullo insercionn, cuando true actualizacion data=caballero


    // recibe el form de CrudForm
    const createData=(objetoFormDeCrudForm)=>{
        console.log(initialDb)
        console.log(objetoFormDeCrudForm)
        // le creamos un id para que no sea un update
        objetoFormDeCrudForm.id = Date.now();
        // trae la base de datos como la tengas con el spread operator y agregale objetoFormDeCrudForm
        setDb([...db, objetoFormDeCrudForm])
    }
// estas fucniones las pasamos como atributos a los demas componentes
    const updateData=(objetoFormDeCrudForm)=>{
        console.log("updateData: ",objetoFormDeCrudForm)
        let newData = db.map(caballero=> caballero.id === objetoFormDeCrudForm.id? objetoFormDeCrudForm: caballero );
        setDb(newData);
    }
// recibbe el id de la fila, osea el objeto de donde se activa el evento 
    const deleteData=(id)=>{  
        console.log(id);
        let newData = db.map(caballero=> caballero.id === id ? db.splice(id, 1) : caballero );
        setDb(newData);
     }
    return (
        <div>
            <h2>CRUD APP</h2>
            {/* el formulario ya va a recibir 4 propiedades, 1 valor y 3 funciones */}
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            {/* la tabla ademas de los datos necesita la funcion que va a elminitar los datos 
            para los botones */}
            <CrudTable dbCrudApp={db} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData} 
            />
        </div>
    )
}

export default CrudApp;