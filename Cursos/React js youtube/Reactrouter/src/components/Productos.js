import { useLocation, useNavigate } from "react-router"

const Productos = () => {
    // let location = useLocation();
 

    // el console muestra un objeto con propiedades y dentro de estas esta seacrh
    // console.log(location)
       //  devuelve:     
    //  hash: ""
    // key: "nyjf4fmx"
    // pathname: "/productos"
    // search: ""
    // state: null
    // [[Prototype]]: Object

    // desesctructuramos seacrch
    let {search} = useLocation();
    // serealiza los parametros
    let query = new URLSearchParams(search);
    // console.log(query)
    // devuelve lo sig::
    //     URLSearchParams {}
    // [[Prototype]]: URLSearchParams
    // append: ƒ append()
    // delete: ƒ delete()
    // entries: ƒ entries()
    // forEach: ƒ forEach()
    // get: ƒ ()
    // getAll: ƒ getAll()
    // has: ƒ has()
    // keys: ƒ keys()
    // set: ƒ ()
    // sort: ƒ sort()
    // to
    // obtenemos de query un params que se llama inicio
    const LIMIT =20
    let start =parseInt(query.get("inicio")) || 1;
    let end =parseInt(query.get("fin")) || 20;

    let navigate= useNavigate();
    // console.log( navigate)    
    // ƒ (to, options) {
    //     if (options === void 0) {
    //       options = {};
    //     }
    
    //      true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is fir

    const handlePRev=()=>{
        navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`)

    }
    const handleNext=()=>{
        navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
    }
    return (
        <div>
            <h3>Productos</h3>
            <p>Mostrando productos del <b>{start}</b><b>al</b><b>{end}</b></p>
            {start > LIMIT && <button onClick={handlePRev}>Atras</button>}
            <button onClick={handleNext}>Adelante</button>
        </div>
    )
}

export default Productos
