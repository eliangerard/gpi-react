import React, { useState } from 'react';
import AdressAutocompleto from './AdressAutocompleto';
import './FormularioAgregar.css';
import imgBackButton from '../../assets/gifs/images.png';
import ImageUploadPreviewComponent from './ImageUploadPreviewComponent';
import { postLocation } from '../../helpers/js/postLocation';

export const FormularioAgregar = () => {
	let formData = {
		nombre: '',
		costo: '',
		tiempo: '',
		aforo: '',
		descripcion: '',
		ubicacion: '',
		categorias: [],
		etiquetas: [],
		imagenes: [],
	};
	const categorias = ["Aire libre", "Salón", "Elegante", "Familiar", "Fiestas"];

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const newFormData = { ...formData, [name]: value };
		formData = newFormData;
	};

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		console.log(e);
		const updatedValues = checked
			? [...formData[name], name]
			: formData[name].filter((item) => item !== name);
		const newFormData = { ...formData, [name]: updatedValues };
		formData = newFormData;
	};

	const handleImagesUploaded = async (images) => {
		console.log("Subiendon");
		const newFormData = { ...formData, imagenes: images };
		console.log(newFormData);
	};

	const handleAddLocation = (formatted, lat, lgt) => {
		const newFormData = {
			...formData, ubicacion: {
				formatted,
				lat,
				lgt
			}
		};
		formData = newFormData;
	}

	const handleSubmit = async () => {
		const { aforo, categorias, costo, descripcion, etiquetas, imagenes, nombre, tiempo, ubicacion } = formData;
		if (aforo.length == 0 || categorias.length == 0 || costo.length == 0 || descripcion.length == 0 || etiquetas.length == 0 || imagenes.length == 0 || nombre.length == 0 || tiempo.length == 0 || ubicacion == 0)
			return console.log("No están todos los datos llenados");

		const result = await postLocation(localStorage.getItem("id"), formData);
		console.log(result);
	};

	return (
		<>

			<div className='formContainer'>
				<div className="formFormularioAgregar">
					<div className="cabezaFormularioAgregar">
						<div className="button-backFormularioAgregar">
							<img src={imgBackButton} className="backFormularioAgregar" alt="Back Button" />
						</div>
						<div className="tituloFormularioAgregar">Registre su lugar</div>
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
									onChange={handleInputChange}
								></textarea>
							</div>
						</div>
						<div className="input-infoFormularioAgregar">
							<div className="input-nameFormularioAgregar">
								<label htmlFor="ubicacion" className="input-lblFormularioAgregar">
									Ubicación del lugar:
								</label>
							</div>
							<div className="input-dataFormularioAgregar">
								<AdressAutocompleto handleAddLocation={handleAddLocation} />
							</div>
						</div>
						<div className="input-infoFormularioAgregar">
							<div className="input-nameFormularioAgregar">
								<label className="input-lblFormularioAgregar">Categorías:</label>
								<label className="ayudaFormularioAgregar">¿En qué categorías se encuentra su lugar?</label>
							</div>
							<div className="categoriasFormularioAgregar">
								<div className="chck-catFormularioAgregar">
									<input
										type="checkbox"
										name="categorias"
										value={categorias[0]}
										className="in-catFormularioAgregar"
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
										className="in-catFormularioAgregar"
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
										className="in-catFormularioAgregar"
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
										className="in-catFormularioAgregar"
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
										className="in-catFormularioAgregar"
										onChange={handleCheckboxChange}
									/>
									<label htmlFor="categoria5" className="checkbox-lblFormularioAgregar">
										Categoría 5
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="dataFormularioAgregar">
						<div className="input-infoFormularioAgregar">
							<div className="input-nameFormularioAgregar">
								<label className="input-lblFormularioAgregar">Etiquetas:</label>
								<label className="ayudaFormularioAgregar">¿Cuáles etiquetas describen mejor lo que ofrece su lugar?</label>
							</div>
							<div className="tagsFormularioAgregar">
								<div className="tagFormularioAgregar">
									<input
										type="checkbox"
										name="etiquetas"
										className="in-tagFormularioAgregar"
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
										className="in-tagFormularioAgregar"
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
										className="in-tagFormularioAgregar"
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
										className="in-tagFormularioAgregar"
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
										className="in-tagFormularioAgregar"
										onChange={handleCheckboxChange}
									/>
									<label htmlFor="etiqueta5" className="checkbox-lblFormularioAgregar">
										Etiqueta 5
									</label>
								</div>
							</div>
						</div>
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
			</div>
		</>
	);
};

export default FormularioAgregar;
