export const MobileNavBar = () => {
    return (
        <>
            <nav>
                <a className="mobIconContainer" onClick={() => { changeView('home') }}>
                    <img className="mobIcon" src="./src/assets/img/place.png" />
                </a>
                <a className="mobIconContainer" onClick={() => { changeView('panel') }}>
                    <img className="mobIcon" src="./src/assets/img/panel.png" />
                </a>
                <a className="mobIconContainer" onClick={() => { changeView('notifications') }}>
                    <img className="mobIcon" src="./src/assets/img/not.png" />
                </a>
                <a className="mobIconContainer" onClick={() => { changeView('notifications') }}>
                    <img className="mobPerfil" src="./src/assets/img/yo.jpg" />
                </a>
            </nav>
        </>
    )
}