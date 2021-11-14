// no lo exporto por defecto para que no se le pueda cambiar el nombre
export const helpHttp= () =>{
    // este metodo va a ser privado
    // va a ser con la arquitectura REST
    const customFetch=(endPoint, options)=>{
        const defaultHeaders = {
            accept:"application/json",
        }

        console.log("endpoin: ",endPoint);
        console.log("options: ",options);
        // manejador de errores para poder cancelar la peticion
        // por el usuario o
        // cuando la peticion fecht detecta que no hay una respuesta
        const controller = new AbortController();
        console.log("Controller: ",controller)
        // nuestro custom fecth esta recibiendo opciones
        options.signal = controller.signal;

        // si trae metodo le dejamos el  metodo y si no le asignamos get
        options.method = options.method || "GET";


        // mezcla las cabeceras que yo estoy programando mas las opciones que el usuario me traiga
        // cuando no me incique cabeceras-...
        options.headers = options.headers ?
        {...defaultHeaders,...options.headers}
        : defaultHeaders;

        // cuando mandan datos hay una propiedad body
        // lo convierto a cadena para que vaya al backend al que este enviando los datos
        // nuestra peticion asincrona. pero en una peticion get no se mandan datos
        // asique aplicamos condiciones.
        // cuando exista options.body convierto, si no es falso....
        options.body = JSON.stringify(options.body) || false;
        // lo igualo a falso para :
        // el metodo delete permite eliminar una propiedad de un objeto
        // si options.body es falso lo elimino, osea si no existe
        // para que no maruqe error en la peticio fetch
        if(!options.body) delete options.body;
        console.log("options en helpHttp: ",options);

        // controller es nuestro objeto abortController que nos permite abortar manualmente
        // nuestra peticion fetch,
        // si despues de 3 segundos no tenemos una respuesta lo aborte
        setTimeout(()=> controller.abort(),1000)

        
        
        // nuestro customFetch va a retornar una promesa
        return fetch(endPoint, options)
        // si la propiedad ok de la respuesta viene entonces la parseo a json, caso contrario rechazo
        .then((res)=>res.ok ?
         res.json()
         :Promise.reject({
            console:"entro a reject",
            err:true,
            // el status lo tomo de la respuesta, 
            // algunas api no devuelven status asique uso el operador de cortocircuito
            status: res.status || "00",
            // otra propiedad de las peticones ayax, pero no todas las api la tienen
            statusText: res.statusText || "Ocurrio un error"
         }) )
        .catch((err)=>err)
    }

//  si no me pasa opciones es vacio
    const get =(url, options = {})=> customFetch(url, options)

    const post =(url, options = {})=>{
        // como es un metodo post le agrego al objeto que la propiedad methos sea igual a post
        options.method = "POST"
        return customFetch(url, options)
    }

    const put =(url, options = {})=>{
        // como es un metodo post le agrego al objeto que la propiedad methos sea igual a post
        options.method = "POST"
        return customFetch(url, options)
    }

    const del =(url, options = {})=>{
        // como es un metodo post le agrego al objeto que la propiedad methos sea igual a post
        options.method = "POST"
        return customFetch(url, options)
    }
    


    return{
        get,
        post,
        put,
        del,
    }
}

// AbortController para darnos la capacidad que si en algun momneto una peticion asinc falla
// tenemos la opcion de abortarla