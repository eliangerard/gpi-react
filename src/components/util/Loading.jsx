import './Loading.css';

export const Loading = ({ status = "Cargando", white = false, showStatus = true }) => {
    return (
        <>
            <div className='loadingContainer'>
                <div className={white ? "jellyWhite" : "jellyBlack"}></div>
                <svg width="0" height="0" className="jelly-maker">
                    <defs>
                        <filter id="uib-jelly-ooze">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="6.25" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="ooze"></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="ooze"></feBlend>
                        </filter>
                    </defs>
                </svg>
                {showStatus && <>
                    <div className='loadingStatus'>
                        {status}
                    </div>
                </>}
            </div>
        </>
    );
}