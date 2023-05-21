import AdressAutocompleto from './AdressAutocompleto';
import './FormularioAgregar.css'
import imgBackButton from '../../assets/gifs/images.png'

export const FormularioAgregar = () => {
    return (
        <>
            <div className="formFormularioAgregar">
                <div className="cabezaFormularioAgregar">
                    <div className="button-backFormularioAgregar"><img src={imgBackButton} className="backFormularioAgregar" /></div>
                    <div className="tituloFormularioAgregar">Registre su lugar</div>
                </div>
                <div className="dataFormularioAgregar">
                    <div className="input-infoFormularioAgregar">
                        <div className="input-nameFormularioAgregar"><label for="nombre" className="input-lblFormularioAgregar">Nombre del lugar:</label></div>
                        <div className="input-dataFormularioAgregar"><input type="text" name="nombre" className="in-txtFormularioAgregar" id="ejemploerror" placeholder="Nombre distintivo del lugar" /></div>
                    </div>
                    <div className="input-infoFormularioAgregar">
                        <div className="costosFormularioAgregar">
                            <div className="input-nameFormularioAgregar"><label for="costo" name="costo" className="input-lblFormularioAgregar">Costo de renta:</label></div>
                            <div className="input-dataFormularioAgregar">
                                <label className="input-lblFormularioAgregar">$ </label>
                                <input type="number" name="costo" className="in-numFormularioAgregar" placeholder="6500" min="1" />
                                <label for="tiempo" className="input-lblFormularioAgregar interFormularioAgregar"> por </label>
                                <input type="number" name="tiempo" className="in-numFormularioAgregar" placeholder="5" min="1" /><label className="input-lblFormularioAgregar interFormularioAgregar"> horas</label>
                            </div>
                        </div>
                        <div className="personasFormularioAgregar">
                            <div className="input-nameFormularioAgregar"><label for="aforo" className="input-lblFormularioAgregar">Aforo máximo: </label></div>
                            <div className="input-dataFormularioAgregar">
                                <input type="number" name="aforo" className="in-numFormularioAgregar" placeholder="50" min="1" />
                                <label className="input-lblFormularioAgregar"> personas</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-infoFormularioAgregar">
                        <div className="input-nameFormularioAgregar"><label for="descripcion" className="input-lblFormularioAgregar">Descripción del lugar: </label></div>
                        <div className="input-dataFormularioAgregar"><textarea className="descrFormularioAgregar" name="descripcion" cols="80" rows="4" placeholder="Descripcion de los servicios ofrecidos en el lugar"></textarea></div>
                    </div>
                    <div className="input-infoFormularioAgregar">
                        <div className="input-nameFormularioAgregar"><label for="ubicacion" className="input-lblFormularioAgregar">Ubicación del lugar: </label></div>
                        <div className="input-dataFormularioAgregar"><AdressAutocompleto/></div>
                    </div>
                    <div className="input-infoFormularioAgregar">
                        <div className="input-nameFormularioAgregar"><label className="input-lblFormularioAgregar">Categorías:</label>
                            <label className="ayudaFormularioAgregar">¿En qué categorías se encuentra su lugar?</label></div>
                        <div className="categoriasFormularioAgregar">
                            <div className="chck-catFormularioAgregar">
                                <input type="checkbox" name="categoria1" className="in-catFormularioAgregar" />
                                <label for="categoria1" className="checkbox-lblFormularioAgregar">Categoría 1</label>
                            </div>
                            <div className="chck-catFormularioAgregar">
                                <input type="checkbox" name="categoria2" className="in-catFormularioAgregar" />
                                <label for="categoria1" className="checkbox-lblFormularioAgregar">Categoría 2</label>
                            </div>
                            <div className="chck-catFormularioAgregar">
                                <input type="checkbox" name="categoria3" className="in-catFormularioAgregar" />
                                <label for="categoria1" className="checkbox-lblFormularioAgregar">Categoría 3</label>
                            </div>
                            <div className="chck-catFormularioAgregar">
                                <input type="checkbox" name="categoria4" className="in-catFormularioAgregar" />
                                <label for="categoria1" className="checkbox-lblFormularioAgregar">Categoría 4</label>
                            </div>
                            <div className="chck-catFormularioAgregar">
                                <input type="checkbox" name="categoria5" className="in-catFormularioAgregar" />
                                <label for="categoria1" className="checkbox-lblFormularioAgregar">Categoría 5</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-infoFormularioAgregar">
                        <div className="input-nameFormularioAgregar"><label className="input-lblFormularioAgregar">Etiquetas:</label>
                            <label className="ayudaFormularioAgregar">¿Cuáles etiquetas describen mejor lo que ofrece su lugar?</label></div>
                        <div className="tagsFormularioAgregar">
                            <div className="tagFormularioAgregar">
                                <input type="checkbox" name="etiqueta1" className="in-tagFormularioAgregar" />
                                <label for="etiqueta1" className="checkbox-lblFormularioAgregar">Etiqueta 1</label>
                            </div>
                            <div className="tagFormularioAgregar">
                                <input type="checkbox" name="etiqueta2" className="in-tagFormularioAgregar" />
                                <label for="etiqueta1" className="checkbox-lblFormularioAgregar">Etiqueta 2</label>
                            </div>
                            <div className="tagFormularioAgregar">
                                <input type="checkbox" name="etiqueta3" className="in-tagFormularioAgregar" />
                                <label for="etiqueta1" className="checkbox-lblFormularioAgregar">Etiqueta 3</label>
                            </div>
                            <div className="tagFormularioAgregar">
                                <input type="checkbox" name="etiqueta4" className="in-tagFormularioAgregar" />
                                <label for="etiqueta1" className="checkbox-lblFormularioAgregar">Etiqueta 4</label>
                            </div>
                            <div className="tagFormularioAgregar">
                                <input type="checkbox" name="etiqueta5" className="in-tagFormularioAgregar" />
                                <label for="etiqueta1" className="checkbox-lblFormularioAgregar">Etiqueta 5</label>
                            </div>
                            <div className="tagFormularioAgregar">
                                <input type="checkbox" name="etiqueta6" className="in-tagFormularioAgregar" />
                                <label for="etiqueta1" className="checkbox-lblFormularioAgregar">Etiqueta 6</label>
                            </div>
                            <div className="tagFormularioAgregar">
                                <input type="checkbox" name="etiqueta7" className="in-tagFormularioAgregar" />
                                <label for="etiqueta1" className="checkbox-lblFormularioAgregar">Etiqueta 7</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-infoFormularioAgregar">
                        <div className="input-nameFormularioAgregar"><label className="input-lblFormularioAgregar">Imágenes:</label></div>
                        <div className="input-dataFormularioAgregar">
                            <input type="file" name="imagen1" className="in-imgFormularioAgregar" />
                            <input type="file" name="imagen2" className="in-imgFormularioAgregar" />
                            <input type="file" name="imagen3" className="in-imgFormularioAgregar" />
                        </div>
                    </div>
                </div>
                <div className="button-submitFormularioAgregar">
                    <input type="submit" value="Registrar lugar" className="btn-submitFormularioAgregar" />
                </div>
            </div>
        </>

    )
};

export default FormularioAgregar;