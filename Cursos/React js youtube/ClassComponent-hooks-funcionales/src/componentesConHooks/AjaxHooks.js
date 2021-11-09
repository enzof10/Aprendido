import React, { useState, useEffect } from 'react';

function Pokemon({avatar,name}){
    return(
        <figure>
            <img src={avatar} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        const getPokemons= async(url)=>{
            let res = await fetch(url),
            json = await res.json();
            json.results.forEach(async(el) => {

                let res = await fetch(el.url),
                json = await res.json();
                    // console.log(json);
                  let pokemon ={
                      id:json.id,
                      name:json.name,
                      avatar:json.sprites.front_default,
                  }
                  // la actualizacion del estado se puede mandar en formato de arrow function
                  // para no tener una variable intermediaria
                  // puede pasar la varibale que actualiza que es pokemons
                  setPokemons((pokemons)=>[...pokemons, pokemon]);
                  // con el spreed operator le digo que 
                  })
        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    },[])


          return (
            <>
             <h2>Peticiones Asincronas Hooks</h2>
             {
             pokemons.length === 0 ? (<h3>Cargando...</h3>):(
             pokemons.map(el =>
                 <Pokemon 
                 key={el.id} 
                 name={el.name}  
                 avatar={el.avatar} /> ))
             }
            </>
        )
} 

// useEffect(()=>{
        
//     // accedo a la api de pokemon
//     let url ="https://pokeapi.co/api/v2/pokemon/";
//     // accedo a los datos con fetch
//     fetch(url)
//     // convierto a json esos datos
//     .then(res =>res.json())
//     // accedo a cada dato de pokemon en particular
//     .then((json)=>{
//         console.log(json)
//         console.log(json.results)
//         json.results.forEach((el) => {
//               fetch(el.url)
//               .then((res)=>res.json())
//               .then(json=>{
//                   console.log(json);
//                 let pokemon ={
//                     id:json.id,
//                     name:json.name,
//                     avatar:json.sprites.front_default,
//                 }
//                 // la actualizacion del estado se puede mandar en formato de arrow function
//                 // para no tener una variable intermediaria
//                 // puede pasar la varibale que actualiza que es pokemons
//                 setPokemons((pokemons)=>[...pokemons, pokemon]);
//                 // con el spreed operator le digo que 
//                 })
//         });
//     })
//     },[])