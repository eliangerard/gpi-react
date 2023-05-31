import { useEffect } from 'react'
import LocationCardEditable from '../home/LocationCardReservated.jsx'

export const Catalogo = ({locations}) => {
    
    return (
        <>
            {
                locations.map(location => {
                    return <LocationCardEditable
                        id={location.idLocacion}
                        key={location.idLocacion}
                        {...location}
                    />
                })
            }
        </>
    )
}

export default Catalogo