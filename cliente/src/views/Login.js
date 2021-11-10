import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/1632184721717.png';

const Login = () => {
    return (
        <div>
            <div class='header2'>
                <Link to="/"  color="#ffffff">
                    <i class="fa fa-home fa2"></i></Link>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div class="container-grid">
                <div class="row">
                    <div class="col-lg-7 info-contact" href="./Home.html">
                        <p> <img src={Logo} width="500" height="300" alt="" /></p>
                    </div>

                    <div class="formulario">
                        <div class="col-lg-10">
                            <div class="form-control">

                                <label for="email"><b float="left" text-align="left">Correo electronico</b></label>
                                <input placeholder="Correo electronico" type="email" id="email" name="email" v-model="email" required />

                                <label for="passsword"><b>Contraseña</b></label>
                                <input type="password" placeholder="Contraseña" name="password" v-model="password" required />

                                <span class="recovery"><router-link to="/Recuperarcontrasena" class="rgt" f>¿Olvidó su contraseña?</router-link></span>

                                <input type="checkbox" checked="checked" name="remember" />
                                <label><b class="rememberme">Recordar contraseña</b></label>

                                <button >Iniciar sesión</button>
                            </div>
                            <span class="rgt">¿No tiene una cuenta?<router-link to="/Register"> Registrese</router-link></span>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <div class="copyright">&copy;2021-G5-82</div>
        </div>
    )
}

export default Login
