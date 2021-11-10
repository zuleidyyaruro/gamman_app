import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon_g.png';

const Header = () => {
    return (
        <header>
            <div class="logo" >
                <Link to='/'><img src={Logo} alt="" /></Link>
            </div>

            <nav>
                <ul>
                    <li><Link class="routerLink" to='/'>Inicio</Link></li>
                    <li><Link class="routerLink" to='/proyectos'>Proyectos</Link></li>
                    <li><Link class="routerLink" to='/nosotros'>Acerca de Nosotros</Link></li>
                    <li><Link class="routerLink" to='/contacto'>Contáctenos</Link></li>
                    <li><Link class="routerLink" to='/login'>Iniciar sesión</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
