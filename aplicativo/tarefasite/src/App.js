import './App.css';
import logo from "./img/assustado.png";
import beijo from "./img/beijo.png"
import macaco from "./img/macaco.png"
import rindo from "./img/rindo.png"

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <img src={logo} title='assustado'height='500px' width='500px'/>
      <p>Clique no emoji para exibir o nome</p>
      <img src={beijo} title='beijo' height='100px' width='100px' />
      <img src={macaco} title='Macaco' height='100px' width='100px' />
      <img src={rindo} title='rindo' height='100px' width='100px' />
    </div>
  );
}

export default App;