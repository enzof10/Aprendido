// import logo from './logo.svg';
// import react from 'react';
import { useState } from 'react';
import html2canvas from 'html2canvas'
// import fire from "./imagenes/fire.jpg"
import './App.css';


function App() {

  // estamos creando una variable y una funcion que permite modificarla

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const changeLinea1 =(evento) =>{
    setLinea1(evento.target.value);
    // debugger;
  }
  const changeLinea2 =(evento) =>{
    setLinea2(evento.target.value);
    // debugger;
  }

  const changeImagen =(evento) =>{
    setImagen(evento.target.value);
    // debugger;
  }
  
  const exportar = ()=>{
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.dowload= "meme.png";
      link.href = img;
      link.click();
});
  }

  return (
      <div className="App">
        <div className="frases">
        <select onChange={changeImagen}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">Futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select>
        <br/>
        <input type="text" placeholder="Linea 1" onChange={changeLinea1} /> <br/>
        <input  type="text" placeholder="Linea 2"onChange={changeLinea2} /> <br/>
        <button onClick={exportar}>Exportar</button>
        </div>
        <div className="meme" id="meme">
          <div className="texto"></div>
          <div className="contenedor-arriba">
            <span className="arriba">{linea1}</span>
          </div>
          <div className="contenedor-abajo">
            <span className="abajo">{linea2}</span>
          </div>
          <div className="imagen">
            <img alt={imagen} src={"imagenes/"+imagen+".jpg"} />
          </div>
        </div>
        {/* select picker de memes*/}
        {/* input text- primer linea */}
        {/* input text- segunda linea */}
        {/* botton exportar */}


      </div>
  );
}

export default App;
