import { useEffect } from 'react'
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