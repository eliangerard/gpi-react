import React, { useState } from 'react';
import Imagen1 from '../../assets/gifs/images.png';
import './EditarPerfil.css';
import { uploadImage } from '../../helpers/js/uploadImage';

const EditarPerfil = ({ data, closePop }) => {
  const [fotoPerfil, setFotoPerfil] = useState(data.fotoPerfil);
  const [nombre, setNombre] = useState(data.nombre);
  const [apellido, setApellido] = useState(data.apellidos);
  const [descripcion, setDescripcion] = useState(data.descripcion);
  
  const submitImage = async () => {
    console.log(fotoPerfil, localStorage.getItem("id"));
      const response = await uploadImage(fotoPerfil, localStorage.getItem("id"));
      console.log(response);
  }
  function handleImageUpload(event) {
    const file = event.target.files[0];



    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        asignarImagen(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  function asignarImagen(uploadedImage) {
    setFotoPerfil(uploadedImage);
  }

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleApplyChanges = () => {
    // Aquí puedes utilizar los valores almacenados en los estados
    submitImage(fotoPerfil);
    console.log(fotoPerfil);
  };

  const closeComponent = () => {
    closePop();
  };

  return (
    <div className="popupEditarPerfil">
      <div className="tarjetaEditarPerfil">
        <div id="profileContainerProfileComponent">
          <div id="profileHeaderProfileComponent">
            <div
              id="closePopUpProfileComponent"
              onClick={() => {
                closeComponent();
              }}
            >
              <img className="userTachotaProfileComponent" src={Imagen1} alt="Cerrar" />
            </div>
            <div className="avatarContainerProfileComponent">
              <div className="image-input-container">
                <input
                  type="file"
                  id="image-input"
                  accept="image/*"
                  onChange={(event) => {
                    handleImageUpload(event);
                  }}
                />
                <label htmlFor="image-input">
                  <img src={fotoPerfil} alt="Seleccionar imagen" />
                </label>
              </div>
            </div>
            <div className="tituloEditarPerfil">
              Nombre:
              <input
                className="formularioEditarPerfil"
                placeholder={`${data.nombre}`}
                value={nombre}
                onChange={handleNombreChange}
              />
            </div>
            <div className="tituloEditarPerfil">
              Apellido:
              <input
                className="formularioEditarPerfil"
                placeholder={data.apellidos}
                value={apellido}
                onChange={handleApellidoChange}
              />
            </div>
            <div className="tituloEditarPerfil">
              Descripción:
              <input
                className="formularioEditarPerfil"
                placeholder={`${data.descripcion}.`}
                value={descripcion}
                onChange={handleDescripcionChange}
              />
            </div>
            <div className="btnLaunchEditarPerfil" id="btnGo" onClick={handleApplyChanges}>
              Aceptar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfil;