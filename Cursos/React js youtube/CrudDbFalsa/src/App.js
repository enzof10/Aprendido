import './App.css';
import CrudApi from './componentes/CrudApi';
import { CrudApp } from './componentes/CrudApp';
import SelectsAnidados from './componentes/SelectsAnidados';
import SongSearch from './componentes/SongSearch';

function App() {
return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicios con REACT</h1>
        <SelectsAnidados/>
        <hr/>
        <SongSearch/>
        <hr/>
        <CrudApi/>
        <hr/>
        <CrudApp/>
      </header>
    </div>
  );
}

export default App;
