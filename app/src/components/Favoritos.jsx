import React, { useContext } from 'react';
import './Home.css';
import Favorito from './Favorito';
import { FavoritosContext } from '../Context/FavoritosContext';

const Favoritos = (props) => {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <div className='margengrande bottom'>
      <h1>Tus favoritos</h1>
      {favoritos.length > 0 ? (
        favoritos.map((favorito) => (
          <section className='creacion' key={favorito.id}>
            <div className='espacioCreacion rowHome'>
              <div className='col-4'>
                <p>● Proyecto {favorito.id}</p>
                <p className='tituloProyecto'><b>{favorito.nombre}</b></p>
                <p>{favorito.descripcion}</p>
                <p>Lenguaje: {favorito.lenguaje}</p>
                <p>{favorito.fecha}</p>
                <a className='linkRepositorio' href={favorito.repositorio} target="_blank">{favorito.repositorio}</a>
                <Favorito id={favorito.id} />
              </div>
              <div className='separacion'>
                <img className='imagen' src={favorito.imagen || 'https://img.remediosdigitales.com/e6d4ad/mclaren-p1-gtr-5p/1366_2000.jpg'} alt="Proyecto" />
              </div>
            </div>
          </section>
        ))
      ) : (
        <h1>No hay elementos todavía</h1>
      )}
    </div>
  );
};

export default Favoritos;
