import React from 'react';
import './Catalogo.css';
import cloudsIcon from './icons/clouds.png';
import hallIcon from './icons/hall.png';
import bussinesIcon from './icons/bussines.png';
import familyIcon from './icons/family.png';
import partIcon from './icons/part.png';
import Header from './Header'

function Catalogo() {
  return (
    <div id="content">
      <Header>
        <Category />
      </Header>
      
      <hr />
      <div id="mostrarBusqueda">
        <div id="mbIzq">
          <h2 id="busqueda">Populares</h2>
        </div>
      </div>
    </div>
  );
}
//Holis

export default Catalogo;
