import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contacto from './views/Contacto';
import Home from './views/Home';
import Login from './views/Login';
import Nosotros from './views/Nosotros';
import Proyectos from './views/Proyectos';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/proyectos' element={<Proyectos/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
