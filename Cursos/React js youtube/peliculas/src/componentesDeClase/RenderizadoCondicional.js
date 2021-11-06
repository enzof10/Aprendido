import React,{Component} from "react"
// cuando un valor del estado o de las propiedades de nuestro componente cambia
// y esto obliga a que se vuelv a repintar la interfaz
// creamos dos componentes funcionales
// idealmente deberian ir en archivos independientes
function Login(){
    return(
        <div>
            <h3>login</h3>
        </div>
    )
}
function Logout(){
    return(
        <div>
            <h3>logout</h3>
        </div>
    )
}
export default class RenderizadoCondicional extends Component{
    // creamos una varibale de estado al componente de clase
    // y en base a este mostramos login o logout
    constructor(props){
        super(props);
        this.state={
            session:true,
        }
    }
    render(){
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ?<Login/>: <Logout/>}
            </div>
        )
    }
}