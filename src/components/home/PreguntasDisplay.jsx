import { useEffect, useState } from "react"
import { getLocationQuestions } from "../../helpers/js/getLocationQuestions";
import PreguntasTarjeta from "../panel/PreguntasTarjeta";

export const PreguntasDisplay = ({id}) => {
    const [preguntas, setPreguntas] = useState([]);
    const fetchPreguntas = async () => {
        const { result = [] } = await getLocationQuestions(localStorage.getItem("id"), id);
        console.log(result);
        setPreguntas(result);
    }
    useEffect(() => {
        fetchPreguntas();
    }, []);

    return (
    <>
        { preguntas.map(pregunta => {
            
            return <PreguntasTarjeta {...pregunta}/>;
        })}
    </>
    )

}