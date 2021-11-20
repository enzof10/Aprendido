import React, {useState, useEffect } from 'react';

// esto no va a ser un componente
// los hooks personalizados se caracterizan mas que nada por devolver logica
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async()=>{
            setLoading(true);


            try {
                const res = await fetch(url);
                if(!res.ok){
                    let err = new Error("Error en la peticion fetch")
                    // no siempre trae status asique uso un operador
                    // de cortocircuito
                    // le agrego atributos al objeto err
                    err.status = res.status || "00"; 
                    err.statusText = res.statusText || "Ocurrio un error"; 
                    throw err;
                }
                // espera a que la peticion fetch se convierta en json
                const json = await res.json();

                // si todo va bien, osea si no hubo aborted actualizamos
                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
                // el error es err que lo manda con throw
            } catch (error) {
                // si la señal no es abort significa que es de otro tipo
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
                
            } finally{
                // si no se aborto la peticion fecth
                if(!signal.aborted){
                    setLoading(false);
            }
        }
    }

    fetchData()
        

        
        return () =>abortController.abort();
        
    }, [url] );
    return {data, error, loading};
    // es lo mismo que poner{data: data, error:error, loading:loading}
}
