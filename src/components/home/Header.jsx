import React from "react";
import logoImage from './icons/gpi-wb.png';
import './Header.css'

function Header() {
    return (
        <header>
        <div id="searchBar">
          <input className="searchInput" type="number" placeholder="mínimo - $0" id="inpMin" min="0" max="10000" />
          <input className="searchInput" type="number" placeholder="máximo - $10,000" id="inpMax" min="0" max="10000" />
          <input className="searchInput" type="date" id="fecha" />
          <input className="searchInput" id="rightInput" placeholder="Lugar" />
          <button id="btnSearch">Buscar</button>
        </div>
        <img id="logo" src={logoImage} alt="Logo" />
      </header>
    )
}

export default Header