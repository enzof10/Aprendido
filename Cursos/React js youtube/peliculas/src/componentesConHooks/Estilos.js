import React from 'react';
import "./Estilos.css";
// import "./estilos.scss";
// en la varibale module.sttile se almacenan todos los estilos
import moduleStyles from "./Estilos.module.css"

export default function Estilos(){
    let myStyle={
        borderRadius:"4rem",
        margin:"2rem auto",
        maxWidth:"49%",
    }
    return(
        <section className="estilos">
            <h2>Estilos en React</h2>
            <h3 className="bg-react">Estilos en hojas externas</h3>
            <h3 className="bg-react" style={{borderRadius:".27rem", margin:"1rem"}}>Estilos en linea(atributo en linea)</h3>
            <h3 className="bg-react" style={myStyle}>Estilos linea con variable</h3>
            <h3 className="bg-react">Agregando normalice con <br/>
            @import-normalize;</h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos</h3>
            {/* <h3 className="bg-sass">Estilos con SASS</h3> */}
        </section>
    )
}