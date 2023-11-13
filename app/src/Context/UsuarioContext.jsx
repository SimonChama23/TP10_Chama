import React, { useState, useEffect } from 'react';

export const UsuarioContext = React.createContext();

const UsuarioProvider = (props) => {
  const [usuario, setUsuario] = useState(() => JSON.parse(sessionStorage.getItem('usuario')) || []);
  const [contraseña, setContraseña] = useState(() => JSON.parse(sessionStorage.getItem('contraseña')) || []);

  useEffect(() => {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    sessionStorage.setItem('contraseña', JSON.stringify(contraseña));
  }, [usuario, contraseña]);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, contraseña, setContraseña }}>
      {props.children}
    </UsuarioContext.Provider>
  );
}

export default UsuarioProvider;
