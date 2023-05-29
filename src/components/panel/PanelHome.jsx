import ResumenPanel from './ResumenPanel'
import ReservacionesPanel from './ReservacionesPanel'
import PreguntasPanel from './PreguntasPanel'
import OpinionesPanel from './OpinionesPanel'
import Legend from './Legend'
export const PanelHome = ({ isDataEmpty }) => {

    //Implementar Legend en lugar del panel 2 en caso de no tener granjas
    //Aquí lleva una manera de ocultar las reservaciones en caso de no tener y mostrar las recientes o en su defecto
    //la que no ha calificado


    const renderQuestionsOpinions = () => {
        return (
            <>
                <div className="panel2PanelStyle">
                    <PreguntasPanel />
                    <OpinionesPanel />
                </div></>
        )
    }
    return (
        <>
            <div className="panelBodyContainerMain">
                <div className="panelBodyPanelStyle">
                    <div className="panel1PanelStyle">
                        <ResumenPanel />
                        <ReservacionesPanel />
                    </div>

                {isDataEmpty ? <Legend/> : renderQuestionsOpinions()
                    }
                </div>

            </div>
        </>
    )
}

export default PanelHome;