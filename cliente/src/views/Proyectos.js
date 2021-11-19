import React from 'react';

const Proyectos = () => {
    return (
        <>
            <h2 className="titulo-proyectos">Gamman</h2>
            <div className="container-grid container-proyectos">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Agregar Proyectos</h2>
                        <form action="">
                            <input type="text" placeholder="Nombre del proyecto" />
                            <input type="text" placeholder="Nombre del Encargado" />
                            <button>Guardar</button>
                        </form>
                    </div>
                    <div className="col-lg-8 lista-proyectos">
                        <h2>Lista de Proyectos</h2>
                        <ol className="card-proyectos">
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                            <button className="boton-editar">Editar</button>
                            <button className="boton-elimminar">Eliminar</button>
                        </ol>
                        <ol className="card-proyectos">
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                            <button className="boton-editar">Editar</button>
                            <button className="boton-elimminar">Eliminar</button>
                        </ol>
                        <ol className="card-proyectos">
                            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                            <button className="boton-editar">Editar</button>
                            <button className="boton-elimminar">Eliminar</button>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyectos
