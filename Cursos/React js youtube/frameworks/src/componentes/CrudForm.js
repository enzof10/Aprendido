import React,{useState} from 'react'

// inicio la estructura del objeto formulario por buena practica
const initialForm={
    name:"",
    constellation:"",
    id:null
}
const CrudForm = () => {

    const [form, setForm] = useState(initialForm);
    


    // generamos los eventos, que los inpues esten controlados por los estados
    const handlleChange =(e)=>{}

    const handlleSubmit =(e)=>{}
    
    const handlleReset =(e)=>{}

    return (
        <div>
            <h3>Agrgegar</h3>
            <form onSubmit={handlleSubmit}>
                <input 
                type="text" 
                name="name" 
                placeholder="Nombre"
                onChange={handlleChange}
                value={form.name}
                />
                <input type="text"
                 name="constelacion" 
                 placeholder="Constelacion" 
                 onChange={handlleChange}
                 value={form.constellation}
                 />
                {/* // para enviar y para limpiar para aprovechar el mismo formulario para create y update */}
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handlleReset}/>
            </form>
        </div>
    )
}

export default CrudForm
