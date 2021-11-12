import React,{useState, useEffect} from 'react'

// inicio la estructura del objeto formulario por buena practica
const initialForm={
    name:"",
    constellation:"",
    id:null,
}
const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    useEffect(()=>{
        // console.log("DatoToediten useEffect",dataToEdit)
        // si data to edit tiene algo
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
        // cuando data to edit caambia se activa
    },[dataToEdit]);

    const [form, setForm] = useState(initialForm);
    


    // generamos los eventos, que los inpues esten controlados por los estados
    const handlleChange =(e)=>{
        setForm({
            // para hacerlo mas automatio, paso el estado con el spread operator
            ...form,
            // y utilizo la desestructuracion para que la propiedad name del input la tome como
            // como atributo del objeto que estoy construyendo
            [e.target.name]:e.target.value,
        })
    }

    const handlleSubmit =(e)=>{
        e.preventDefault();
        // los elementos del formulario no se vayan vacios
        // si los ESTADOS se encuentran vacios, no los campos
        if(!form.name || !form.constellation){
            alert("Datos icompletos");
            return;
        }
        // si el id del objeto form que se uso para guardar los estados
        // esta vacio, ejecuto la funcion createData
        if(form.id === null){
            createData(form);
        }else{
            // si el id tiene un valor ejecuto update, esto porque voy a usar el mismo
            // formulario para editar y crear
            updateData(form);
        }
        handlleReset();
    }
    // despues de esto tendriamos que limpiar el formulario
    // lo vamos a usar para varias cosas
    const handlleReset =(e)=>{
        setForm(initialForm);
        // tambien editamos el data a null como en el componente padre donde se creo
        // para controlar 
        setDataToEdit(null);
        }

    return (
        <div>
            {/* si la variable dataToEdit trae algo  significa  significa que paso el objeto 
            al evento padre mediante el evento onclick*/}
            <h3>{dataToEdit ?"Editar" :"Agregar"}</h3>
            <form onSubmit={handlleSubmit}>
                <input 
                type="text" 
                name="name" 
                placeholder="Nombre"
                onChange={handlleChange}
                value={form.name}
                />
                <input
                 type="text"
                 name="constellation" 
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
