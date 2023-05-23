import { useEffect } from 'react'
import '../home/Catalogo.css'
import LocationCardReservated from '../home/LocationCardReservated.jsx'

export const Catalogo = ({locations}) => {
    
    return (
        <>
            {
                locations.map(location => {
                    return <LocationCardReservated
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