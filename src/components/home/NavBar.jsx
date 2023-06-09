import React, { useState } from 'react';
import './NavBar.css';

function NavBar({setShowLanding, changeView, profile, fetchProfile }) {

  const logOut = () => {
    localStorage.clear();
    setShowLanding(true);
  };

  const handleViewChange = (view) => {
    changeView(view);
    fetchProfile();
  };
  
  const {nombre, promedioPuntuacion, fotoPerfil} = profile;

  return (
    <aside>
      <div className="navProfileContainer">
        <div className="navP">
          <img id="navProfile" src={fotoPerfil} />
          <div id="navPi">
            <img id="navPreview" src="./src/assets/img/right.png" />
          </div>
        </div>
        <div className="navName">{nombre}</div>
        { promedioPuntuacion && <div className="navRate"> {promedioPuntuacion} ⭐</div>} 
        <div className="navEdit" onClick={()=> handleViewChange('profile')}>Editar perfil
          <img className="navIcon" id="iPencil" src="./src/assets/img/pencil.png"/>
        </div>
      </div>

      <div className="navContainer">
        <a className="navIconContainer" onClick={() => handleViewChange('home')}>
          <img className="navIcon" src="./src/assets/img/place.png" />
          <h4 className="navText">Catalogo</h4>
        </a>
        <a className="navIconContainer" onClick={() => handleViewChange('panel')}>
          <img className="navIcon" src="./src/assets/img/panel.png" />
          <h4 className="navText">Panel</h4>
        </a>
        <a className="navIconContainer" onClick={() => handleViewChange('about')}>
          <img className="navIcon" src="./src/assets/img/info.png" />
          <h4 className="navText">Conocenos</h4>
        </a>
        <a className="navIconContainer" onClick={() => handleViewChange('admin')}>
            <img className="navIcon" src="./src/assets/img/admin.png" />
            <h4 className="navText">Administrador</h4>
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
