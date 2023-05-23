import ResumenPanel from './ResumenPanel'
import ReservacionesPanel from './ReservacionesPanel'
import PreguntasPanel from './PreguntasPanel'
import OpinionesPanel from './OpinionesPanel'
import Legend from './Legend'
export const PanelHome = () => {

    //Implementar Legend en lugar del panel 2 en caso de no tener granjas
    //Aquí lleva una manera de ocultar las reservaciones en caso de no tener y mostrar las recientes o en su defecto
    //la que no ha calificado
    return (
        <>
                <div className="panelBodyContainerMain">               
                <div className="panelBodyPanelStyle">
                    <div className="panel1PanelStyle">
                        <ResumenPanel />
                        <ReservacionesPanel />
                    </div>
                    <div className="panel2PanelStyle">
                        <PreguntasPanel />
                        <OpinionesPanel />
                    </div>
                </div>

            </div>
        </>
    )
}

export default PanelHome;