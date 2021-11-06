import React from "react";

export default function Saludar(props){
    console.log("propr" +props)
    console.log("eventoApp lleva a " + props.eventoApp)
    console.log("userinfo"+ props.userInfo)
    // saca la informacion de una variable
    const {userInfo, eventoApp} = props;
    // anonimo es por default
    const {nombre = "anonimo"} = userInfo;

    console.log(userInfo, eventoApp)
    return(
        <div>
            {console.log("eventoApp con parametro " +props.eventoApp(props.userInfo.nombre))}
            {/* <p>Hola {props.userInfo.nombre},
            tiene {props.userInfo.edad} años,
            su color favorito es {props.userInfo.color}</p> */}
            {/* uso una funcion anonima porque se no se ejecuta automaticamente
            es decir se llama al instante */}
            <button onClick={()=>props.eventoApp(props.userInfo.nombre)}>
                Saludar con props para cada objeto
            </button>
            {/* arriba se desestructuran los props */}
            <p onClick={()=>eventoApp(userInfo.nombre)}>Saludar con destructuring</p>
            <p onClick={()=>eventoApp(nombre)}>Saludar con destructuring mas destructurado</p>
        </div>
    );
}