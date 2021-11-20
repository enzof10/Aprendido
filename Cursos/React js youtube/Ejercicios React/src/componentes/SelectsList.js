import { useFetch } from "../useFetch"
import Loaders from "./Loaders";
import Message from "./Message";

// desestructuramos las props que vienen del padre
const SelectsList = ({title, url, handleChange}) => {
    // desesctructuramos las propiedades de fetch
    const {data, error, loading} = useFetch(url);
    console.log("data, error, loading",data, error, loading)

    // para evitar renderizados innecesarios
    if(!data) return null;
    if(error){
        return (
        <Message 
        msg={`Error: ${error.status} 
        ${error.statusText} 
        bgColor="#dc3444"`}
        />) 
    }
    // el title viene como props del elemento padre ya si aprovechamos el componente varias veces
    let id = `select-${title}`;
    // transformo la primera letra de title a mayuscula
    let label = title.charAt(0).toUpperCase()+ title.slice(1);
    let options = data[title];
    console.log("options Selectlist: ",options);
    return (
        <>
        <label htmlFor={id}>{label}</label>
        {/* usamos la varibale loadgind de fetch para mostrarlo mientras se carga */}
        {loading && <Loaders/>}
        {/* en select anidados le paso el evento del cambio el select y actualizar las variables de estados*/}
            <select name={id} id={id} onChange={handleChange}>
                {data && options.map((objeto)=>
                // por problemas con la api hay diferentes formas de accerder a los nombres
                 <option key={objeto.id} value={objeto.nombre}>{objeto.nombre}</option>)}
            </select>
        </>
    )
}

export default SelectsList
