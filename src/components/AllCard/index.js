import React from 'react';
import Card from '../Tool/card.js';
import cardData from '../../constants/CardData.js';


function AllCard() {
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default AllCard;
