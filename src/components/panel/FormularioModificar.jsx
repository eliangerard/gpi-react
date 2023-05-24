import React, { useState } from 'react';
import AdressAutocompleto from './AdressAutocompleto';
import './FormularioAgregar.css';
import imgBackButton from '../../assets/gifs/images.png';
import ImageUploadPreviewComponent from './ImageUploadPreviewComponent';

export const FormularioModificar = ({id, closePop}) => {

  // Método para obtener datos de la pinche granja

  


  const [formData, setFormData] = useState({
    nombre: '',
    costo: '',
    tiempo: '',
    aforo: '',
    descripcion: '',
    imagenes: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImagesUploaded = (images) => {
    console.log("Subiendon");
  
    setFormData({ ...formData, imagenes: images });
  };

  const handleSubmit = () => {
    //Aqui se llama el fetch pa actualizar la info a la verga puta
    console.log(formData);
  };

  return (
    <>
      <div className="formFormularioAgregar">
        <div className="cabezaFormularioAgregar">
          <div className="button-backFormularioAgregar">
            <img src={imgBackButton} className="backFormularioAgregar" alt="Back Button" onClick={closePop}/>
          </div>
          <div className="tituloFormularioAgregar">Modifique su lugar</div>
        </div>
        <div className="dataFormularioAgregar">
          <div className="input-infoFormularioAgregar">
            <div className="input-nameFormularioAgregar">
              <label htmlFor="nombre" className="input-lblFormularioAgregar">
                Nombre del lugar:
              </label>
            </div>
            <div className="input-dataFormularioAgregar">
              <input
                type="text"
                name="nombre"
                className="in-txtFormularioAgregar"
                placeholder="Nombre distintivo del lugar"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input-infoFormularioAgregar">
            <div className="costosFormularioAgregar">
              <div className="input-nameFormularioAgregar">
                <label htmlFor="costo" className="input-lblFormularioAgregar">
                  Costo de renta:
                </label>
              </div>
              <div className="input-dataFormularioAgregar">
                <label className="input-lblFormularioAgregar labelFormularioAgregar">$</label>
                <input
                  type="number"
                  name="costo"
                  className="in-numFormularioAgregar"
                  placeholder="6500"
                  min="1"
                  value={formData.costo}
                  onChange={handleInputChange}
                />
                <label htmlFor="tiempo" className="input-lblFormularioAgregar interFormularioAgregar labelFormularioAgregar">
                  por
                </label>
                <input
                  type="number"
                  name="tiempo"
                  className="in-numFormularioAgregar"
                  placeholder="5"
                  min="1"
                  value={formData.tiempo}
                  onChange={handleInputChange}
                />
                <label className="input-lblFormularioAgregar interFormularioAgregar labelFormularioAgregar">horas</label>
              </div>
            </div>
            <div className="personasFormularioAgregar">
              <div className="input-nameFormularioAgregar">
                <label htmlFor="aforo" className="input-lblFormularioAgregar">
                  Aforo máximo:
                </label>
              </div>
              <div className="input-dataFormularioAgregar">
                <input
                  type="number"
                  name="aforo"
                  className="in-numFormularioAgregar"
                  placeholder="50"
                  min="1"
                  value={formData.aforo}
                  onChange={handleInputChange}
                />
                <label className="input-lblFormularioAgregar labelFormularioAgregar">personas</label>
              </div>
            </div>
          </div>
          <div className="input-infoFormularioAgregar">
            <div className="input-nameFormularioAgregar">
              <label htmlFor="descripcion" className="input-lblFormularioAgregar">
                Descripción del lugar:
              </label>
            </div>
            <div className="input-dataFormularioAgregar">
              <textarea
                className="descrFormularioAgregar"
                name="descripcion"
                cols="80"
                rows="4"
                placeholder="Descripción de los servicios ofrecidos en el lugar"
                value={formData.descripcion}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          {/* <div className="input-infoFormularioAgregar">
            <div className="input-nameFormularioAgregar">
              <label htmlFor="ubicacion" className="input-lblFormularioAgregar">
                Ubicación del lugar:
              </label>
            </div>
            <div className="input-dataFormularioAgregar">
              <AdressAutocompleto
                value={formData.ubicacion}
                onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
              />
            </div>
          </div> */}
          {/* <div className="input-infoFormularioAgregar">
            <div className="input-nameFormularioAgregar">
              <label className="input-lblFormularioAgregar">Categorías:</label>
              <label className="ayudaFormularioAgregar">¿En qué categorías se encuentra su lugar?</label>
            </div>
            <div className="categoriasFormularioAgregar">
              <div className="chck-catFormularioAgregar">
                <input
                  type="checkbox"
                  name="categorias"
                  value="Categoría 1"
                  className="in-catFormularioAgregar"
                  checked={formData.categorias.includes('Categoría 1')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="categoria1" className="checkbox-lblFormularioAgregar">
                  Categoría 1
                </label>
              </div>
              <div className="chck-catFormularioAgregar">
                <input
                  type="checkbox"
                  name="categorias"
                  value="Categoría 2"
                  className="in-catFormularioAgregar"
                  checked={formData.categorias.includes('Categoría 2')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="categoria2" className="checkbox-lblFormularioAgregar">
                  Categoría 2
                </label>
              </div>
              <div className="chck-catFormularioAgregar">
                <input
                  type="checkbox"
                  name="categorias"
                  value="Categoría 3"
                  className="in-catFormularioAgregar"
                  checked={formData.categorias.includes('Categoría 3')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="categoria3" className="checkbox-lblFormularioAgregar">
                  Categoría 3
                </label>
              </div>
              <div className="chck-catFormularioAgregar">
                <input
                  type="checkbox"
                  name="categorias"
                  value="Categoría 4"
                  className="in-catFormularioAgregar"
                  checked={formData.categorias.includes('Categoría 4')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="categoria4" className="checkbox-lblFormularioAgregar">
                  Categoría 4
                </label>
              </div>
              <div className="chck-catFormularioAgregar">
                <input
                  type="checkbox"
                  name="categorias"
                  value="Categoría 5"
                  className="in-catFormularioAgregar"
                  checked={formData.categorias.includes('Categoría 5')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="categoria5" className="checkbox-lblFormularioAgregar">
                  Categoría 5
                </label>
              </div>
            </div>
          </div> */}
        </div>
        <div className="dataFormularioAgregar">
          {/* <div className="input-infoFormularioAgregar">
            <div className="input-nameFormularioAgregar">
              <label className="input-lblFormularioAgregar">Etiquetas:</label>
              <label className="ayudaFormularioAgregar">¿Cuáles etiquetas describen mejor lo que ofrece su lugar?</label>
            </div>
            <div className="tagsFormularioAgregar">
              <div className="tagFormularioAgregar">
                <input
                  type="checkbox"
                  name="etiquetas"
                  value="Etiqueta 1"
                  className="in-tagFormularioAgregar"
                  checked={formData.etiquetas.includes('Etiqueta 1')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="etiqueta1" className="checkbox-lblFormularioAgregar">
                  Etiqueta 1
                </label>
              </div>
              <div className="tagFormularioAgregar">
                <input
                  type="checkbox"
                  name="etiquetas"
                  value="Etiqueta 2"
                  className="in-tagFormularioAgregar"
                  checked={formData.etiquetas.includes('Etiqueta 2')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="etiqueta2" className="checkbox-lblFormularioAgregar">
                  Etiqueta 2
                </label>
              </div>
              <div className="tagFormularioAgregar">
                <input
                  type="checkbox"
                  name="etiquetas"
                  value="Etiqueta 3"
                  className="in-tagFormularioAgregar"
                  checked={formData.etiquetas.includes('Etiqueta 3')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="etiqueta3" className="checkbox-lblFormularioAgregar">
                  Etiqueta 3
                </label>
              </div>
              <div className="tagFormularioAgregar">
                <input
                  type="checkbox"
                  name="etiquetas"
                  value="Etiqueta 4"
                  className="in-tagFormularioAgregar"
                  checked={formData.etiquetas.includes('Etiqueta 4')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="etiqueta4" className="checkbox-lblFormularioAgregar">
                  Etiqueta 4
                </label>
              </div>
              <div className="tagFormularioAgregar">
                <input
                  type="checkbox"
                  name="etiquetas"
                  value="Etiqueta 5"
                  className="in-tagFormularioAgregar"
                  checked={formData.etiquetas.includes('Etiqueta 5')}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="etiqueta5" className="checkbox-lblFormularioAgregar">
                  Etiqueta 5
                </label>
              </div>
            </div>
          </div> */}
          <div className="input-infoFormularioAgregar">
            <div className="input-nameFormularioAgregar">
              <label className="input-lblFormularioAgregar">Imágenes:</label>
              <label className="ayudaFormularioAgregar">Agregue imágenes de su lugar</label>
            </div>
            <div className="imagenesFormularioAgregar">
              <ImageUploadPreviewComponent handleImagesUploaded={handleImagesUploaded} />
            </div>
          </div>
        </div>
        <div className="btnsFormularioAgregar">
          <div className="btnFormularioAgregar btnGuardarFormularioAgregar" onClick={handleSubmit}>
            Guardar
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioModificar;
