import React,{Component} from "react";


export default class Padre extends Component{
    // creamos 
    state={
        contador:0,
    }
    incrementrarContador=(e)=>{
        this.setState({
            contador:this.state.contador +1
        })
    }
    render(){
        return(
            <>
            <h2>Comunicacion entre componentes</h2>
            <p>Contador<b>{this.state.contador}</b></p>
            {/* aca el padre pasa el mensaje */}
            {/* el hijo numero uno no va  a funcionar porque tiene un nombre de props distinto */}
            <Hijo incrementrarContador={this.incrementrarContador} mensaje="Mensaje para el hijo numero 1"/>
            <Hijo incrementrarContado={this.incrementrarContador} mensaje={this +" this con incrementador:"+ this.incrementrarContador + "hijo numero 2"} />
            </>
        )
    }
}

function Hijo(props){
    return (
        <>
        {/* un elemento se va arenderizar cuando le pasan propiedades o cuando se altera su estado */}
        <h3>{props.mensaje}</h3>
        {/* el hijo ejecuta un metodo dentro de la estructura del componente padre */}
        <button onClick={props.incrementrarContado}>+</button>
        </>
    )
}