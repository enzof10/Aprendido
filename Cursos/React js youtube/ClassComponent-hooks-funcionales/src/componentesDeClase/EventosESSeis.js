import React, {Component} from "react";

export class EventosESSeis extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        }
        // bind es para enlazar el metodo con la clase
        // cada vez que defina un evento en un componente basado en clases
        // hay que hacer esto, se recomienda hacer el bindeo en el constructor
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(e){
        console.log("sumando");
        console.log(this);
        console.log(e);
        this.setState({
           contador:this.state.contador +1,
        })
    }
    restar(e){
        console.log("restando");
        console.log(this);
        this.setState({
           contador:this.state.contador -1,
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos de componentes de Clases ESSeis</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}


// properties initializer
export class EventosES7 extends Component{
// el estado es como una propiedad de la clase
        state={
            contador:0,
        }
        // bind es para enlazar el metodo con la clase
        // cada vez que defina un evento en un componente basado en clases
        // hay que hacer esto, se recomienda hacer el bindeo en el constructor
    sumar=(e)=>{
        console.log("sumando");
        console.log(this);
        console.log(e);
        this.setState({
           contador:this.state.contador +1,
        })
    }
    // las felchas heredan el this del contexto en el que se encuentran
    restar =(e)=>{
        console.log("restando");
        console.log(this);
        this.setState({
           contador:this.state.contador -1,
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos de componentes de Clases ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

// function Boton(props){
//     return <button onClick={props.myOnClick}>Boton hecho componente</button>
// }
// const Boton=(props)=><button onClick={props.myOnClick}>Boton hecho componente</button>
// o puedo desestructurar el props directamente
const Boton=({myOnClick})=><button onClick={myOnClick}>Boton hecho componente</button>

export class MasSobreEventos extends Component{
    // handle es manejar
    // los manejadores de eventos solo reciben eventos
    // si necesito pasar mas parametros necesito hacer una invocacion nomarl de eventos
    // e es el sintetic ident de react
    handleClick=(e, mensaje)=>{
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={this.handleClick}>Saludar</button>
                <hr/>
                <button onClick={(e)=>this.handleClick(e, "hola estoy pasando un parametro desde un evento")}>Saludar con parametros en evento</button>
                {/* evento personalizado desdee un elemento react, de lo contrario no funciona */}
                <Boton myOnClick={(e)=>this.handleClick(e, "hola estoy pasando un parametro desde un evento")}/>
            </div>

        )
    }
}