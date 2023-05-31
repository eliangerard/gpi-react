import './Panel.css'
import './PreguntasSelfPanel.css'
import Image1 from '../../assets/img/avatar.jpg'

export const PreguntasSelfPanel = ({location}) => {

    const fecha = location.fecha;
    const fechaParseada = new Date(fecha);

    const dia = fechaParseada.getUTCDate();
    
    const opcionesMes = {month: 'long'};
    const mesTexto = fechaParseada.toLocaleDateString('es-ES', opcionesMes).replace(/^\w/, (letra) => letra.toUpperCase());;
    
    return (
        <>
            <div className="itemPreguntaCardPanelStyleAnchaQuestion">
                <div className="itemPreguntaBodyPanelStyleAnchaQuestion">
                    <div className="itemPreguntaPhotoPanelStyle">
                        <img src={location.fotoPerfil} id="preguntaPhotoPanelStyle" />
                    </div>

                    <div className="itemPreguntaBodyTextPanelStyle">
                        <div className="itemPreguntaTextHeaderPanelStyle">
                            <div className="itemPreguntaTextPerfilPanelStyle">{location.nombre}</div>
                            <div className="itemPreguntaTextDatePanelStyle">{dia} de {mesTexto} en {location.locacionNombre}</div>
                        </div>
                        <div className="itemPreguntaTextQuestionPanelStyle">{location.pregunta}</div>
                    </div>
                </div>

                <div className="itemPreguntaBodyInputPanelStyle">
                    <div className="itemPreguntaInputPanelStyle">
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreguntasSelfPanel;
