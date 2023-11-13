import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Favoritos from './components/Favoritos';
import InfoMia from './components/InfoMia';
import MisCreaciones from './components/MisCreaciones';

import FavoritosProvider from './Context/FavoritosContext';
import CreacionesProvider from './Context/CreacionesContext';

function App() {
  return (
    <FavoritosProvider>
      <CreacionesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index  element={<Home />} />
              <Route path="/Favoritos" element={<Favoritos />} />
              <Route path="/InfoMia" element={<InfoMia />} />
              <Route path="/MisCreaciones" element={<MisCreaciones />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CreacionesProvider>
    </FavoritosProvider>
  );
}

export default App;
