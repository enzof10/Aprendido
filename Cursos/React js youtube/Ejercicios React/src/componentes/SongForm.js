import React, { useState } from 'react';

const initialForm={
    artist:"",
    song:"",
}
const SongForm = ({handleSearch}) => {

    const [form, setForm] = useState(initialForm);

    const handleChange=(e)=>{
        setForm({
            // toma una copia del objeto formulario y la combina con el name del evento,
            // entre corchetes lo hace dinamicmente
            ...form,
            [e.target.name]:e.target.value
        })
    };

    const handleSubmit=(e)=>{
        // preventDefaault para que nos e vuelva a cagrar la pag
        e.preventDefault();

        if(!form.artist || !form.song){
            alert("Datos incompletos");
            return;
        }else{
            handleSearch(form);
            setForm(initialForm);
            console.log(initialForm)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="artist" 
                placeholder="Nombre del interprete" 
                onChange={handleChange}
                value={form.artist}
                />
                <input 
                type="text" 
                name="song"
                placeholder="Nombre la cancion" 
                onChange={handleChange}
                value={form.song}
                 />
               {/* lo ideal es tener los formularios controlados a partir de una vsaribale de estado */}
                <input type="submit" value="Enviar"/>

            </form>
        </div>
    )
}

export default SongForm;