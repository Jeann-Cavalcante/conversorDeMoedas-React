import logo from "./logo.svg";
import "./App.css";

import Conversor from "./componentes/Conversor";

function App() {
  return (
    <div className="App">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
    </div>
  );
}

export default App;
