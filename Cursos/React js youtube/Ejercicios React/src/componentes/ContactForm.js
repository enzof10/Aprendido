import { useForm } from "../hooks/useForm";
import Loaders from "./Loaders";
import Message from "./Message";
const initialForm={
    // es importante definir la estructura base
    name:"",
    email:"",
    subjet:"",
    comments:""
}

// recibe el form para validaciones y devuelve errores
const validationsForm=(form)=>{
    // el bojeto que va a retornar si hay errores en las validaciones
    let errors = {}
    let  regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let  regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/
// trim suprime los espacios al principio y final,
// asi, si hay espacios no los toma como validos
    if(!form.name.trim()){
        // asociamos el nombre del objeto error al input con el mismo nombre de propiedad
        errors.name = "El campo `Nombre` es requerido"
    }else if (!regexName.test(form.name.trim())){
        errors.name = "El campo `Nombre` solo acepta letras y espacios en blanco"
    }


    if(!form.email.trim()){
        // asociamos el nombre del objeto error al input con el mismo nombre de propiedad
        errors.email = "El campo `Email` es requerido"
    }else if (!regexEmail.test(form.email.trim())){
        errors.email = "El campo `Email`es incorrecto"
    }

    if(!form.subjet.trim()){
        // asociamos el nombre del objeto error al input con el mismo nombre de propiedad
        errors.subjet = "El campo `Subjet` es requerido"
    }

    if(!form.comments.trim()){
        // asociamos el nombre del objeto error al input con el mismo nombre de propiedad
        errors.comments = "El campo `Comentarios` es requerido"
    }else if (!regexComments.test(form.comments.trim())){
        errors.comments = "El campo `Comentarios` no debe exceder los 249 caracteres"
    }


    return errors
}
let style={
    fontWeight: "bold",
    color: "#dc3444"
}
const ContactForm = () => {
    // desestructuramos todos los elementos que retorna el hook personalizado useForm
    const {
        form, 
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }= useForm(initialForm, validationsForm)
    return (
        <div>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="name" 
                placeholder="Escribe tu nombre" 
                onBlur={handleBlur}
                onChange={handleChange} 
                value={form.name}
                required
                />
                {errors.name && <p style={style}>*{errors.name}*</p>}
                <input 
                type="email" 
                name="email" 
                placeholder="Escribe tu email" 
                onBlur={handleBlur}
                onChange={handleChange} 
                value={form.email} 
                required
                />
                {errors.email && <p style={style}>*{errors.email}*</p>}
                <input 
                type="text" 
                name="subjet" 
                placeholder="Asunto a tratar" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.subjet} 
                required
                />
                {errors.subjet && <p style={style}>*{errors.subjet}*</p>}
                <textarea 
                name="comments" 
                cols="49"
                rows="5"
                placeholder="Escribe tus comentarios"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.comments}
                required
                />
                {errors.comments && <p style={style}>*{errors.comments}*</p>}
                <input type="submit" value="Enviar" />
            </form>
            {loading && <Loaders/>}
            {response && 
            (<Message
            msg="Los datos han sido enviados"
            bgColor="#198744"
            />)}
        </div>
    )
}

export default ContactForm