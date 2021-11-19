import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderPrincipal';
import Contacto from './views/Contacto';
import Home from './views/Home';
import Login from './views/Login';
import Nosotros from './views/Nosotros';
import NuestrosProyectos from './views/NuestroProyectos';
import Proyectos from './views/Proyectos';
import Registro from './views/Registro.';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nuestrosproyectos' element={<NuestrosProyectos/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/proyectos" element={<Proyectos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
