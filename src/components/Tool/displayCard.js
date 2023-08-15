import React from 'react';
import Card from './card'; // Update the import to match your file name
import cardData from '../../constants/CardData';

const DisplayCard = () => {
  return (
    <div className="flex flex-wrap justify-center  m-2">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default DisplayCard;
