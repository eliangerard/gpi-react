import CatalogoOpinionesSelfCard from './CatalogoOpinionesSelfCard.jsx'

export const PanelReview = () => {
    return(
        <>
        <div className="panelBodyContainerMain">
                    <div className="itemWelcomePanelStyle">
                        Aqui están tus opiniones sobre lugares
                    </div>
                <div className="panelBodyPanelStyle">
                    <div className="contenedorSelfOpinionesCatalogo">
                        <CatalogoOpinionesSelfCard/>
                        <CatalogoOpinionesSelfCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelReview;