import React from 'react';
import rightIcon from '../../assets/right.png';
import homeIcon from '../../assets/home.svg';
import rentarIcon from '../../assets/rentar.png';
import sellerIcon from '../../assets/seller.png';
import logo from '../../assets/gpi-w.png';
import './NavBar.css';

function NavBar() {
  return (
    <aside>
      <div id="navLogoContainer">
        <img id="navLogo" src={logo} alt="Logo" />
        <div id="rightBackground">
          <img id="navRight" src={rightIcon} alt="Right icon" />
        </div>
      </div>
      <a className="navIconContainer navLink" href="index.html">
        <img className="navIcon" src={homeIcon} alt="Home icon" />
        <h4 className="navText">Inicio</h4>
      </a>
      <a className="navIconContainer navLink" href="demo.html">
        <img className="navIcon" src={rentarIcon} alt="Rentar icon" />
        <h4 className="navText">Cliente</h4>
      </a>
      <a className="navIconContainer navLink" href="form.html">
        <img className="navIcon" src={sellerIcon} alt="Seller icon" />
        <h4 className="navText">Anfitrión</h4>
      </a>
    </aside>
  );
}

export default NavBar;
