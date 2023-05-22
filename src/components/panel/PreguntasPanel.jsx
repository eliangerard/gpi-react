import PreguntasTarjetaPanel from './PreguntasTarjetaPanel'

export const PreguntasPanel = () => {
    return (
        <>
            <div className="itemPreguntaPanelStyle">
                Preguntas
                <PreguntasTarjetaPanel/>
                <PreguntasTarjetaPanel/>
            </div>
        </>
    )
}

export default PreguntasPanel
