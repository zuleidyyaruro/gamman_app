import React from 'react';
import Footer from '../components/Footer';
import Logo from '../assets/1632184721717.png';
import Header from '../components/Header';

const Contacto = () => {
    return (
        <div>
            <Header />
            <section class="proy" id="proy">
                <div class="overlay">
                    <h2 class="proy_header">GAM<span class="lixon">MAN</span></h2>
                    <h3 class="proy_header2">Gestor de proyectos</h3>
                </div>
            </section>

            <section>
                <h2>Contáctenos</h2>
                <p class="p-contact">Contáctenos para compartir sus comentarios, opiniones y necesidades</p>

                <div class="container-grid">
                    <div class="row">
                        <div class="col-lg-5 col-sm-12 info-contact">
                            <h3>Información de Contacto</h3>
                            <br />
                            <img src={Logo} width="500" height="300" alt="" />
                            <p> Bogotá - Colombia<br />
                                Calle 70a bis # 17 - 62 Piso 2 <br />
                                Teléfono: 724-8075
                            </p>
                        </div>
                        <div class="col-lg-7 col-sm-12 container-form">
                            <form action="" class="form-contact">
                                <input class="input" type="text" placeholder="Nombre" />
                                <input class="input" type="text" placeholder="E-mail" />
                                <input class="input" type="text" placeholder="Celular" />
                                <input class="input" type="text" placeholder="Mensaje" />
                                <button class="button">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contacto
