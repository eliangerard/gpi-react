import React, { useState } from 'react';
import './ReviewDisplay.css';
import ReviewCard from './ReviewCard';

export const ReviewDisplay = ({ qty, id }) => {
  const [cardCount, setCardCount] = useState(qty);

  const agregar6 = () => {
    setCardCount(cardCount + 6);
  };

  return (
    <>
      <div className="reviewDisplayContainer">
        {Array.from({ length: cardCount }).map((_, index) => (
          <ReviewCard key={index} id={id} />
        ))}
        <div className="reviewLeerMas" onClick={agregar6}>
          Leer Más
        </div>
      </div>
    </>
  );
};

export default ReviewDisplay;
