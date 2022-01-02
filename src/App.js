import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './Header';

function App() {
  const [contador, setContador] = useState(0);

  function clicando() {
    setContador(contador + 1);
  }
  return (
    <div className="App">
        <Header title={contador}></Header>
        <input type="button" value="Click me!" onClick={clicando}/>
    </div>
  );
}

export default App;
