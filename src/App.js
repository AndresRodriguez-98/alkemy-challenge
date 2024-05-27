import { Route, Routes } from 'react-router-dom';

import Login from "./components/Login";
import Listado from "./components/Listado";
import Detalle from "./components/Detalle";
import Resultados from './components/Resultados';

import './css/bootstrap.min.css';
import './css/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/listado' Component={Listado} />
        <Route path='/detalle' Component={Detalle} />
        <Route path='/resultados' Component={Resultados} />
      </Routes>
    </>
  );
}

export default App;

