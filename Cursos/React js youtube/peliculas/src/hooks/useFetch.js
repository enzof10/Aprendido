import  {useState , useEffect } from 'react';

// hago que solo reciba url porque el metodo que recibe por defecto fetch
// el el metodo get
export const useFetch = (url)=>{
    // seria bueno que cada vez que hagamos una peticion
    // tengamos una variable que controle cuando ya se ha recibido esa peticion
    // y cuando ya se regres la respuesta se resolvio
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [eror, seteror] = useState(null);
    


}