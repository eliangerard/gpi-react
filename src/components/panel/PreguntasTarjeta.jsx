import Image1 from '../../assets/img/avatar.jpg'
import Image3 from '../../assets/img/send.png'

import './preguntaCard.css';
export const PreguntasTarjeta = ({idPregunta, nombre, fotoPerfil,locacionNombre, fecha, pregunta}) => {
    return (
        <>
            <div className="preguntaCardContainer">
                <div className="itemPreguntaBodyPanelStyle">
                    <div className="itemPreguntaPhotoPanelStyle">
                        <img src={fotoPerfil} id="preguntaPhotoPanelStyle" />
                    </div>

                    <div className="itemPreguntaBodyTextPanelStyle">
                        <div className="itemPreguntaTextHeaderPanelStyle">
                            <div className="itemPreguntaTextPerfilPanelStyle">{nombre}</div>
                            <div className="itemPreguntaTextDatePanelStyle">{fecha} en {locacionNombre}</div>
                        </div>
                        <div className="itemPreguntaTextQuestionPanelStyle">{pregunta}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PreguntasTarjeta;