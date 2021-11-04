import React, {Component} from "react";

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        }
        // bind es para enlazar
        this.sumar = this.sumar.bind(this);
    }
    sumar(){
        console.log("sumando");
        console.log(this);
    }
    render(){
        return(
            <div>
                <h2>Eventos de componentes de Clases</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.sumar}>-</button>
                </nav>
            </div>
        )
    }
}