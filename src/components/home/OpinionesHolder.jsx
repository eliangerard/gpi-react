import OpinionCard from './OpinionCard'

export const OpinionesHolder = ({opinions}) =>{

    return (
        <>
            {
                opinions.map(opinion => {
                    return <OpinionCard
                        id = {opinion.idOpinion}
                        key = {opinion.idOpinion}
                        opinion = {opinion}
                    />
                })
            }
        </>
    )
}

export default OpinionesHolder