import React, { useEffect, useState } from 'react';

const Titulo = () => {
  const text = 'Proyectos de Simon Chama ';
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    const delay = 100;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      setDisplayText(text.substring(0, currentIndex));

      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='margenTopInicial'>
      <h1 className='tituloPrincipal'>{displayText}</h1>
    </div>
  );
}

export default Titulo;
