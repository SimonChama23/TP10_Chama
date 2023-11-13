import './Home.css';
import React, { useContext } from 'react';
import Titulo from './Titulo';
import Favorito from './Favorito';
import { CreacionesContext } from '../Context/CreacionesContext';

const Home = (props) => {
    const { creaciones, setCreaciones } = useContext(CreacionesContext);

    return (
        <div className='bottom'>
            <section>
                <Titulo />
            </section>
            </div>
    );
};

export default Home;
