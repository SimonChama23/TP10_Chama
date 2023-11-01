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
    ]);

    return <CreacionesContext.Provider value={{ creaciones, setCreaciones }}>{props.children}</CreacionesContext.Provider>;
}

export default CreacionesProvider;
