import React from 'react';
import './Home.css';
import Header from './Header'
import Catalogo from './Catalogo'
import NavBar from './NavBar'
import InfoCard from './InfoCard';
import Carrusel from './Carrusel';

function Home({ setShowLanding }) {
  return (
    <div id="content">
      <NavBar setShowLanding={setShowLanding} />
      <Header />
      <hr />
      <div id="mostrarBusqueda">
        <div id="mbIzq">
          <h2 id="busqueda">Populares</h2>
        </div>
      </div>
      <div id="catalogo">
        <Catalogo />
      </div>
    </div>
  );
}

export default Home;
