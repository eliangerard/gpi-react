import React, { useEffect, useState } from 'react';
import './ReviewDisplay.css';
import ReviewCard from './ReviewCard';
import { getOpiniones } from '../../helpers/js/getOpiniones';

export const ReviewDisplay = ({ qty, id }) => {
  const [cardCount, setCardCount] = useState(qty);
  const [opiniones, setOpiniones] = useState([]);
  const fetchOpiniones = async () => {
    console.log(id);
    const { result = [] } = await getOpiniones(localStorage.getItem("id"), id);
    console.log(result);
    setOpiniones(result);
  }
  useEffect(() => {
    fetchOpiniones();
  }, []);
  const agregar6 = () => {
    setCardCount(cardCount + 6);
  };

  return (
    <>
      <div className="reviewDisplayContainer">
        {opiniones.length == 0 ?<h5>Aún no hay opiniones</h5> : opiniones.map((opinion, index) => (
          <ReviewCard key={index} {...opinion} />
        ))}
        <div className="reviewLeerMas" onClick={agregar6}>
          Leer Más
        </div>
      </div>
    </>
  );
};

export default ReviewDisplay;
