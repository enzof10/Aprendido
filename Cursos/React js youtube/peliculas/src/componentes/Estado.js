import React,{Component} from "react";

    // estado de un componente adre se le puede pasar a componente hijo
    // un componente funcional no puede tener estado
    function EstadoAHijo(props){
        return(
            <div>
                <h3>contador hijo: {props.contadorHijo}</h3>
                {/* {console.log(props)} */}
            </div>
        )
    }

export default class Estado extends Component{
    constructor(props){
      super(props);
      this.state ={
          contador:0,
      };
    setInterval(()=>{
      this.setState({
            contador :this.state.contador +1,
          })
      },100000)
    }

    render(){
        return(
            <div>
                <h2>Estado</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador +3}/>
            </div>
        )
    }
}