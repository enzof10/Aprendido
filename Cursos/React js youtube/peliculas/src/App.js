import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
// import HolaMundo from "./componentes/holamundo"
import Saludar from './componentes/Saludar';
import Boton from './componentes/Boton';
import React, {useState, useEffect} from "react";
import Componente from "./componentes/Componente";
import Propiedades from "./componentes/Propiedades";
import Estado from "./componentes/Estado";
import RenerizadoCondicional from "./componentes/RenderizadoCondicional";
import RenderizadoElementos from "./componentes/RenderizadoElementos";
// como no exportamos de manera por default hay que desestructurar
import {EventosESSeis, EventosES7, MasSobreEventos} from "./componentes/EventosESSeis";
import Padre from "./componentes/ComunicacionEntreComponentes";
import CicloVida from "./componentes/CicloVida";
import AjaxApi from './componentes/AjaxApis';
function App() {

  // const userName = "Enzo frias";
  // const edad = 27;
  
  const user ={
    nombre : "Enzo Frias Borda",
    edad : 27,
    color : "azul"
  }
  const saludarFn = (name) =>{
    console.log("holaaa" + name)
  }
  // el primero es el valor del estado y el segundo la funcion que se ocupa de actualizar ese estado
  const [carState, setCarState] = useState(false);
  // para actualizar el estado solo tenemos que utilizar la funcion statecar
  const interruptor = ()=>{
    // le pasamos el mismo valor que tiene ahora el estado
    // setCarState(!carState)
    // ootra manera para recuperar el valor del estado
    // si mandamos la funcion aotro componente y no tenemos acceso a esa infromacion
    setCarState(prevalue => !prevalue);
    // le estamos pidiendo el valor del estado al setcarState
    setContar(contar + 1)
  }
  const [contar, setContar] = useState(0);
  // useEfeect se va a ejecutar cada vez que useefect se modifique
  useEffect(() => {
    // aca se ejecuta todo
    console.log("total" + contar)
  }, [contar])

  return (
    <div className="App">
      <Propiedades 
        cadena="esto es una cadena de texto"
        numero={19}
        booleano={true}
        arreglo={[1, 2, 3]}
        objeto={{nombre:"enzo", correo:"Enzo_17@hotmail.com"}}
        elementoReact={<i>Esto es un elemento React </i>}
        funcion={num=>num*num}
        componenteReact= {<Componente msg="Soy un componente pasado como props"/>}
      />
      <hr/>
      <Estado/>
      <hr/>
      <RenerizadoCondicional/>
     <hr/>
     <RenderizadoElementos/>
     <hr/>
     <EventosESSeis/>
     <hr/>
     <EventosES7/>
     <hr/>
     <MasSobreEventos/>
     <hr/>
     <Padre/>
     <hr/>
     <CicloVida/>
     <hr/>
     <AjaxApi/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>React boostrap</h1>
          <hr/>
          <Button variant="primary">Primary</Button>
          <h2>El coche esta {carState ? "encendido": "Apagado"}</h2>
          <h4>clicks: {contar}</h4>
          <Button variant="primary" onClick={interruptor}>Encender/Apagar</Button>

        </p>
        {/* <Saludar name="Paco algo"/>
        {/* para mandar informacion por props hay que mandar el nombre de la propiedad */}
        {/* <Saludar name="Enzo frias Borda"/> */}
        {/* props semi-dinamico */}
        {/* <Saludar name={userName} edad={edad}/> */}
        <Saludar userInfo={user} eventoApp={saludarFn} />
        <hr/>
        <Boton/>
        <hr/>
      <Componente msg="Hola soy un componente desde una props"/>
      </header>
    </div>
  );
}


export default App;
