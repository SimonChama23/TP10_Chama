import React, { useState, useEffect } from 'react';

export const FavoritosContext = React.createContext();

const FavoritosProvider = (props) => {
  const [favoritos, setFavoritos] = useState(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem('favoritos'));
    return storedFavoritos || [];
  });
  
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
      {props.children}
    </FavoritosContext.Provider>
  );
}

export default FavoritosProvider;
