import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Suscripciones from "./components/Suscripciones/Suscripciones";
import Historic from "./components/Historic/Historic";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/bgpactual" element={<Home />} />
        <Route path="/suscripciones" element={<Suscripciones />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </div>
  );
}

export default App;
