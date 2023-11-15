import './Home.css'
import React, { useContext } from 'react'
import Titulo from './Titulo'
import Favorito from './Favorito'
import { CreacionesContext } from "../Context/CreacionesContext"

const Home = (props) => {
    const { creaciones } = useContext(CreacionesContext)

    return (
        <div className='bottom'>
            <section>
                <Titulo />
            </section>
            {creaciones.slice(0, 6).map((creacion) =>
                <section className='creacion' key={creacion.id}>
                    <div className='espacioCreacion rowHome'>
                        <div className='col-4'>
                            <p>● Proyecto {creacion.id}</p>
                            <p className='tituloProyecto'><b>{creacion.nombre}</b></p>
                            <p>{creacion.descripcion}</p>
                            <p>Lenguaje: {creacion.leguaje}</p>
                            <p>{creacion.fecha}</p>
                            <a className='linkRepositorio' href={creacion.respositorio} target="_blank" rel="noopener noreferrer">{creacion.respositorio}</a>
                            <Favorito id={creacion.id} />
                        </div>
                        <div className='separacion'>
                            <img className='imagen' src={creacion.imagen ? creacion.imagen : 'https://img.remediosdigitales.com/e6d4ad/mclaren-p1-gtr-5p/1366_2000.jpg'} alt="Project" />
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Home;
