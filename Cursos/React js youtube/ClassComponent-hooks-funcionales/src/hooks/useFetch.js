import  {useState , useEffect } from 'react';

// hago que solo reciba url porque el metodo que recibe por defecto fetch
// el el metodo get
export const useFetch = (url)=>{
    // seria bueno que cada vez que hagamos una peticion
    // tengamos una variable que controle cuando ya se ha recibido esa peticion
    // y cuando ya se regres la respuesta se resolvio
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    // puede traer error para en caso que haya error poderlo manipular
    const [error, setError] = useState(null);

    // se va aejecutar cuando cambie la url en el archivo donde se manda a llmaar nuestro hook personalizado
    // es decir cuando cambie la url
    useEffect(()=>{
        const getData= async(url)=>{
            try {
            let res = await fetch(url);
            if(!res.ok){
                // throw era como el return de los errores
                // es lo que va a caputar catch
            throw {
                    err:true,
                     status:res.status,
                      statusText: !res.statusText ? "Ocurrio un error": res.statusText,
                    };
            }
         let  data = await res.json();

         setisPending(false);
         setData(data);
         setError({err:false})
        }catch(err) {
            setisPending(true);
            setError({err});
        }
        }
        getData(url);
    },[url])
// tiene que retornar algo
    return{data, isPending, error};
}