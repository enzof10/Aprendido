import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado.js';
import CrudApi from './components/CrudApi';
import ShopingCart from './components/ShopingCart';

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <CrudApi/>
      <hr/>
      <ShopingCart/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
