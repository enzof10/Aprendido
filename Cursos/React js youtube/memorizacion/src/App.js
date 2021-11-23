import './App.css';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <h1>Memorizacion en React</h1>
      <hr/>
      <h2>Teoria</h2>
      <h3>
        <a
        href="https://es.reactjs.org/docs/react-api.html#reactmemo"
        target="_blank"
        rel="noreferrer">
          Memo
        </a>
    </h3>
      <Contador/>
    </div>
  );
}

export default App;
