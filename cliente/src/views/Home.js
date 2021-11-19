import React from 'react';
import Footer from '../components/Footer';
import ImgBack from '../assets/1632184721717.png';
import Header from '../components/HeaderPrincipal';
import HeaderPrincipal from '../components/HeaderPrincipal';

const Home = () => {
    return (
        <div>
            <HeaderPrincipal />
            <section class="proy" id="proy">
                <div class="overlay">
                    <h2 class="proy_header">GAM<span class="lixon">MAN</span></h2>
                    <h3 class="proy_header2">Gestor de proyectos</h3>
                </div>
            </section>

            <br />
            <br />
            <section class="logo-home">
                <img src={ImgBack} alt=""/>
            </section>
            <br />
            <Footer />
        </div>
    )
}

export default Home
