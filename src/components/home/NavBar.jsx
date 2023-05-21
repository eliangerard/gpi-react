import React from 'react';
import './NavBar.css';

function NavBar({setShowLanding}) {
  const logOut = () => {
    localStorage.clear();
    setShowLanding(true);
  }
  return (
    <aside>
      <div className="navProfileContainer">
        <div className="navP">
          <img id="navProfile" src="./src/assets/img/yo.jpg" />
          <div id="navPi">
            <img id="navPreview" src="./src/assets/img/right.png" />
          </div>
        </div>
        <div className="navName">Misael Álvarez</div>
        <div className="navRate">4.95 ⭐</div>
        <div className="navEdit">Editar perfil<a href="elian.html">
          <img className="navIcon" id="iPencil" src="./src/assets/img/pencil.png"/></a>
        </div>
      </div>

      <div className="navContainer">
        <a className="navIconContainer" href="adan.html">
          <img className="navIcon" src="./src/assets/img/place.png" />
          <h4 className="navText">Catalogo</h4>
        </a>
        <a className="navIconContainer" href="elian.html">
          <img className="navIcon" src="./src/assets/img/panel.png" />
          <h4 className="navText">Panel</h4>
        </a>
        <a className="navIconContainer">
          <img className="navIcon" src="./src/assets/img/not.png" />
          <h4 className="navText">Notificaciones</h4>
        </a>
        <a className="navIconContainer" href="about.html">
          <img className="navIcon" src="./src/assets/img/info.png" />
          <h4 className="navText">Conocenos</h4>
        </a>
        <a className="navIconContainer" id="iLogout" onClick={logOut}>
          <img className="navIcon" src="./src/assets/img/logout.png" />
          <h4 className="navText" id="iLog" >Cerrar sesion</h4>
        </a>
      </div>
    </aside>
  );
}

export default NavBar;
