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
    {id:1,
    name:"Ikki",
    constellation:"Fenix"
    }
];

export const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    )
}

export default CrudApp;