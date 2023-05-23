
export const HeaderPanel = ({setAdministrationView}) => {
    const handleViewChange = (view) => {
        setAdministrationView (view)
    }
    return (
        <>
            <div className="panelHeaderPanelStyle">
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelHome')} >Inicio</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelReservations')}>Reservaciones</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelQuestions')}>Preguntas</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelReviews')}>Opiniones</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelMyLocations')}>Mis locaciones</div>
            </div>

        </>
    )
}

export default HeaderPanel