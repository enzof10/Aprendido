import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
// import HolaMundo from "./componentesDeClase/holamundo"
import Saludar from './componentesDeClase/Saludar';
import Boton from './componentesDeClase/Boton';
import React, {useState, useEffect} from "react";
import Componente from "./componentesDeClase/Componente";
import Propiedades from "./componentesDeClase/Propiedades";
import Estado from "./componentesDeClase/Estado";
import RenerizadoCondicional from "./componentesDeClase/RenderizadoCondicional";
import RenderizadoElementos from "./componentesDeClase/RenderizadoElementos";
// como no exportamos de manera por default hay que desestructurar
import {EventosESSeis, EventosES7, MasSobreEventos} from "./componentesDeClase/EventosESSeis";
import Padre from "./componentesDeClase/ComunicacionEntreComponentes";
import CicloVida from "./componentesDeClase/CicloVida";
import AjaxApi from './componentesDeClase/AjaxApis';
import ContadorHooks from './componentesConHooks/ContadorHooks';
import ScrollHooks from './componentesConHooks/ScrollHooks';
import RelojHooks from './componentesConHooks/RelojHooks';
import AjaxHooks from './componentesConHooks/AjaxHooks';
import HooksPersonalizados from './componentesConHooks/HookPersonalizado';

function App() {

  const [ properties, setProperties] = useState(false);
  const [handleApi, setHanldeApi] = useState(false);
  const [handleScroll, setHanldeScroll] = useState(false);
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
        <div className="propiedades">
            <h2 onClick={() => setProperties(!properties)} >Iniciar propiedades</h2>
            {properties &&
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
          }
       </div>
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
     <div className="pokeApi">
         <h2 onClick={()=>setHanldeApi(!handleApi)}>Pokeapi.(click para renderizar o eliminar)</h2>
            {handleApi && <AjaxApi/>}
     </div>
     <hr/>
     <hr/>
     <ContadorHooks titulo="seguidores"/>
     <hr/>
     <div>
        <h2 onClick={()=>setHanldeScroll(!handleScroll)}>Scroll Hoooks(click para renderizar o eliminar)</h2>
            {handleScroll && <ScrollHooks/>}
     </div>
     <hr/>
     <RelojHooks/>
     <hr/>
     <AjaxHooks/>
     <hr/>
     <HooksPersonalizados/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>React boostrap</h1>
          <hr/>
          <Button variant="primary">Primary</Button>
          <h2>El coche esta {carState ? "encendido": "Apagado"}</h2>
          <h4>clicks: {contar}</h4>
          <Button variant="primary" onClick={interruptor}>Encender/Apagar</Button>
        </div>
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
