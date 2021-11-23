import React, { useState } from 'react';

const initialForm={
    artist:"",
    song:"",
}
const SongForm = ({handleSearch, handleSaveSong}) => {

    const [form, setForm] = useState(initialForm);
    // para controlar el botn de guardar cacnion
    const [handleButton, setHandleButton] = useState(true)

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
        setHandleButton(true);

            return;
        }else{
            handleSearch(form);
            setForm(initialForm);
            console.log(initialForm)
        }
        setHandleButton(false);
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
                <input type="button" onClick={handleSaveSong} value="Agregar cancion" 
                disabled={handleButton && "disabled"}/>

            </form>
        </div>
    )
}

export default SongForm;