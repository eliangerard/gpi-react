
export const HeaderPanel = ({setAdministrationView}) => {
    const handleViewChange = (view) => {
        setAdministrationView (view)
    }
    return (
        <>
            <div className="panelHeaderPanelStyle">
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelHome')} >Inicio</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelReservations')}>Locaciones</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelQuestions')}>Preguntas</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelReviews')}>Opiniones</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelMyLocations')}>Registrar</div>
            </div>

        </>
    )
}

export default HeaderPanel