import React from 'react';

export const CreacionesContext = React.createContext();

const CreacionesProvider = (props) => {
    const [creaciones, setCreaciones] = React.useState([
        {
            id: 1,
            nombre: 'Directorio de personas',
            descripcion: 'Una aplicación en React para listar personas.',
            lenguaje: 'React, Js, Css',
            fecha: 'Septiembre 2023',
            repositorio: 'https://github.com/SimonChama23/TP07_Personas.git',

        },

        {

            id: 2,
            nombre: 'Catalogo de productos',
            descripcion: 'Una aplicación en React para catalogar productos.',
            lenguaje: 'React, Js, Css',
            fecha: 'Septiembre 2023',
            repositorio: 'https://github.com/SimonChama23/TP-CATALOGO-DE-PRODUCTOS-1-Y-2.git',

        },

        {

            id: 3,
            nombre: 'TP Comidas',
            descripcion: 'Una aplicación para crear una carta de opciones de menús para un hotel .',
            lenguaje: 'React, Js, Css',
            fecha: 'Septiembre 2023',
            repositorio: 'https://github.com/UlisesBaamonde/TP-Comidas-Expo-',

        }
    ]);

    return <CreacionesContext.Provider value={{ creaciones, setCreaciones }}>{props.children}</CreacionesContext.Provider>;
}

export default CreacionesProvider;
