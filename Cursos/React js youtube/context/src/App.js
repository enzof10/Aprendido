import './App.css';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';

function App() {
  return (
    <div className="App">
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </div>
  );
}

export default App;
