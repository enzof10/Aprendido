import React,{useState, useEffect} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import {helpHttp} from "../helpers/heplHttp"
import Loaders from './Loaders';
import Message from './Message';
import { HashRouter, 
    NavLink, 
    Route, 
    Routes } from 'react-router-dom';
import Error404 from './Error404';


export const CrudApi = () => {
    const [db, setDb] = useState(null);
    // creo las variabkes para loader y mensaje para renderizar 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    // como actualizamos cada una de las operaciones, con funciones
    const [dataToEdit, setDataToEdit] = useState(null);
    // cuando este nullo insercionn, cuando true actualizacion data=caballero
    
    
    useEffect(() => {
         // para simplificar el llamado de help
         let api = helpHttp();
         let url = "http://localhost:5000/santos";
         console.log("Entro al useEfect")
        //  cambio la variable de set loading para que se muestre mientras carga
         setLoading(true)
           api.get(url)
           .then(res=>{
               console.log("entro a resp", res)
            //cuando no un msj de error osea err del error
               if(!res.err){
                   console.log("Entro a al if de resp en useEfect")
                   setDb(res)
                //    modifico el estado error para que si hay un error se renderize la palabra error
                   setError(null)
               }else{
                console.log("Entro a al else de resp")

                   setDb(null)
                //    si la promesa falla le asignamos el error que configuramos en helperHttm
                   setError(res)
               }
            console.log(res)} )

            setLoading(false)


        },[])
        // arreglo siginifca que lo va a ejecutar una sola vez
 



    // recibe el form de CrudForm
    const createData=(objetoFormDeCrudForm)=>{
        let api = helpHttp();
        let url = "http://localhost:5000/santos";
        console.log("1-objeto en creade data crudapi: ", objetoFormDeCrudForm)
       
    //espero recibir el contenido en aplicacion/json, si no, no funciona
    // algunas api soportan esto y otras no
        let options= {
            body:objetoFormDeCrudForm,
             headers:{"content-type":"application/json"}
            }
        
        console.log("3-options CrudApi: ",options)
        // le creamos un id para que no sea un update
        objetoFormDeCrudForm.id = Date.now();
        // trae la base de datos como la tengas con el spread operator y agregale objetoFormDeCrudForm
        api.post(url, options)
        .then((res)=>{console.log("x-Despues que sale de helpHttp: ",res);
        if(!res.err){
            // actualiza lo que haya en la db mas lo que venga en la data
            // pero ojo, con la respuesta que venga de la variable
            setDb([...db, res]);
        }else{
            setError(res);

        }
    })
    }
// estas fucniones las pasamos como atributos a los demas componentes
    const updateData=(objetoFormDeCrudForm)=>{
        let api = helpHttp();
        let url = "http://localhost:5000/santos";
        let endpoint = ` ${url}/${objetoFormDeCrudForm.id}`;
        let options= {
            body:objetoFormDeCrudForm,
             headers:{"content-type":"application/json"}
            }
        
        api.put(endpoint, options)
        .then((res)=>{console.log("x-Despues que sale de helpHttp: ",res);
        if(!res.err){
            let newData = db.map(caballero=> caballero.id === objetoFormDeCrudForm.id? objetoFormDeCrudForm: caballero );
            setDb(newData);
        }else{
            setError(res);

        }
    })




    }
// recibbe el id de la fila, osea el objeto de donde se activa el evento 
    const deleteData=(id)=>{  
        console.log("id en deleteData: ",id);
        // windows confirm devuelve un boolean dependiendo de aceptar o cancelar
        let isDelete = window.confirm(`Esta seguguro de eliminar el registro ${id}`)

        // no necisitamos body porque pasamos el id, y accede a todo el objeto
        if(isDelete){
            let api = helpHttp();
            let url = "http://localhost:5000/santos";
            let endpoint = ` ${url}/${id}`;
            let options ={
                headers:{"content-type": "application/json"},
            }
            // en vez de map usamos un filtrado
            api.del(endpoint, options)
            .then((respuesta) =>{
                if(!respuesta.err){
                    console.log("Respuesta en delete ",respuesta)
                    console.log("db en delete ",db)
                    let newData = db.filter((el)=> el.id !== id);
                    setDb(newData);
                    alert("Entro a if")
                }else{
                    setError(respuesta);
                    alert("Entro a else ")
                }
            })
   
        }else{
            return;
        }
     }
    return (
        <div>
            <HashRouter basename="/">
                <header>
                    <h2>Crud api con rutas</h2>
                    <nav>
                        <NavLink to="/home" 
                        style={isActive => 
                        ({color: isActive ?
                         "green" : "blue"})}
                         >Santos</NavLink>
                         <NavLink to="/agregar" 
                        style={isActive => 
                        ({color: isActive ?
                         "green" : "blue"})}
                         >Agregar</NavLink>
                    </nav>
                </header>
                <Routes>
                    <Route path="/home" element={
                    <article className="grid-1-2"> 
                {/* el formulario ya va a recibir 4 propiedades, 1 valor y 3 funciones */}
               
                {/* renderizado condicional de loading, solo cuando sea verdadera */}
                {loading && <Loaders/>}
                {error && (<Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3747"/>)}
                {/* la tabla ademas de los datos necesita la funcion que va a elminitar los datos 
                para los botones */}
                {/* si el valor de la base de datos es nullo no se renderiza */}
               {db && (<CrudTable dbCrudApp={db} 
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData} 
                />)}
            </article> }/>
            <Route path="/" element={<h2>Santos inicio</h2>}/>
                    <Route path="/agregar" element={ 
                        <CrudForm 
                            createData={createData} 
                            updateData={updateData} 
                            dataToEdit={dataToEdit}
                            setDataToEdit={setDataToEdit}
                            />}/>
                    <Route path="/editar/:id" element={ 
                        <CrudForm 
                            createData={createData} 
                            updateData={updateData} 
                            dataToEdit={dataToEdit}
                            setDataToEdit={setDataToEdit}
                            />}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </HashRouter>
            <h2>CRUD API</h2>
            {/* en movil va a estar a una columna y en pc en dos */}
            
        </div>
    )
}

export default CrudApi;