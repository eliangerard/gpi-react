
export const HeaderPanelUser = ({setAdministrationView}) => {
    const handleViewChange = (view) => {
        setAdministrationView (view)
    }
    return (
        <>
            <div className="panelHeaderPanelStyle">
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelHome')} >Inicio</div>
                <div className="panelItemPanelStyle" onClick={ () => handleViewChange('PanelMyLocations')}>Registrar</div>
            </div>

        </>
    )
}

export default HeaderPanelUser