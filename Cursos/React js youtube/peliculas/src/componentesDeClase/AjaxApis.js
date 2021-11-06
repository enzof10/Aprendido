import React, { Component } from 'react'

// se le llamaba componente tonto o de presentacion
function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}


export default class AjaxApi extends Component{
    state={
        pokemons:[],
    }
// no tiene sentido hacer peticiones en el constructor porque el componente todavia no esta el el DOM
// asique la hacemos en el metodo didmout

componentDidMount(){
    // accedo a la api de pokemon
    let url ="https://pokeapi.co/api/v2/pokemon/";
    // accedo a los datos con fetch
    fetch(url)
    // convierto a json esos datos
    .then(res =>res.json())
    // accedo a cada dato de pokemon en particular
    .then((json)=>{
        console.log(json)
        console.log(json.results)
        json.results.forEach((el) => {
              fetch(el.url)
              .then((res)=>res.json())
              .then(json=>{
                  console.log(json);
                let pokemon ={
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default,
                }
                // con el spreed operator le digo que 
                let pokemons =[...this.state.pokemons, pokemon];
                this.setState({pokemons})
                })
        });
    })
}
    render(){
        return (
            <>
             <h2>Peticiones Asincronas en compnnenestes de clases</h2>
             {
             this.state.pokemons.length === 0 ? (<h3>Cargando...</h3>):(
             this.state.pokemons.map(el =>
                 <Pokemon 
                 key={el.id} 
                 name={el.name}  
                 avatar={el.avatar} /> ))
             }
            </>
        )
    }
}