import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado.js';
import ShopingCart from './components/ShopingCart';

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <ShopingCart/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
