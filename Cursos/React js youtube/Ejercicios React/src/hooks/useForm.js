import { useState } from 'react';
import { helpHttp } from '../helpers/heplHttp';

// los hook personanilazdos no se exportan de manera por default
// recibe initial form y funcion de validacion
export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    // para interaccion con el servidor
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    // variables para los eventos
    const handleChange =(e)=>{
        // desestructuro las propiedades que vienen del evento
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }


    const handleBlur =(e)=>{
        handleChange(e);
        // si hay algun error se va a llenar el objeto error
        setErrors(validateForm(form));
    }


    const handleSubmit =(e)=>{
        e.preventDefault();
        setErrors(validateForm(form))

        // evaluamos si la longitud de las llaves es 0
        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario");
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/enzofriasborda@gmail.com",{ 
            body: form,
            headers:{
                "content-Type":"application/json",
                Accept: "application/json",
            }})
            .then((res)=>{
                setLoading(false);
                setResponse(true);
                setForm(initialForm);
                setTimeout(()=>setResponse(false),4900)
            })
        }else{
            return;
        }
    }

    // puede retornar cuaquier tipo de objeto
    return{
        form, 
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } 
}
