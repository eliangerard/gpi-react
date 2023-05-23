import { useEffect } from 'react'
import './Catalogo.css'
import LocationCard from './LocationCard'

export const Catalogo = ({locations}) => {
    
    return (
        <>
            {
                locations.map(location => {
                    return <LocationCard
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