import './MisCreaciones.css';
import Favorito from './Favorito';
import React, { useState, useContext } from 'react';
import { CreacionesContext } from "../Context/CreacionesContext";

const MisCreaciones = (props) => {
  const { creaciones } = useContext(CreacionesContext);
  const elementosPorPagina = 5;
  const [paginaActual, setPaginaActual] = useState(1);

  const obtenerPosiciones = () => {
    const ultimoElemento = paginaActual * elementosPorPagina;
    const primerElemento = ultimoElemento - elementosPorPagina;
    return creaciones.slice(primerElemento, ultimoElemento);
  }

  const cambiarPagina = (siguientePag) => {
    setPaginaActual(siguientePag);
  }

  return (
    <div className='margengrande bottom'>
      <h1>Todos mis proyectos</h1>
      {obtenerPosiciones().map((creacion) => (
        <section className='creacion' key={creacion.id}>
          <div className='espacioCreacion rowHome'>
            <div className='col-4'>
              <p>● Proyecto {creacion.id}</p>
              <p className='tituloProyecto'><b>{creacion.nombre}</b></p>
              <p>{creacion.descripcion}</p>
              <p>Lenguaje: {creacion.lenguaje}</p>
              <p>{creacion.fecha}</p>
              <a className='linkRepositorio' href={creacion.repositorio} target="_blank">{creacion.repositorio}</a>
              <Favorito id={creacion.id} />
            </div>
            <div className='separacion'>
              <img className='imagen' src={creacion.imagen ? creacion.imagen : 'https://img.remediosdigitales.com/e6d4ad/mclaren-p1-gtr-5p/1366_2000.jpg'} alt="Project" />
            </div>
          </div>
        </section>
      ))}

      <div className="paginacion">
        <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>Anterior</button>
        <span>Página {paginaActual}</span>
        <button onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual * elementosPorPagina >= creaciones.length}>Siguiente</button>
      </div>
    </div>
  )
}

export default MisCreaciones;
