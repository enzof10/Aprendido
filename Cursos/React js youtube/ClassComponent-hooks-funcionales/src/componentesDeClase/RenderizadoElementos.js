import React,{Component} from "react";
import data from "../ayudas/data.json"

function Librerias(props){
    return(
        <li>
            <a href={props.libre.web} target={props.target}>{props.libre.name}{console.log("props solos: " + props +"props con libre" +props.libre)}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state={
            seasons:["primavera", "Verano", "Otoño", "Invierno"],
        }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {/* los li los generamos dinamicamente */}
                    {this.state.seasons.map((estacion, index) => <li key={index} >{estacion}</li>)}
                </ol>
                <h3>Fameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((el)=>(
                            <Librerias key={el.id} libre={el} target="_blank"/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}