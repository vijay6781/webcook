import React from 'react';
import Button from './button'; // Update the import to match your file name
import './Card.css'; // Import the CSS file

const Card = ({ title, description, imageUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="card-container relative flex items-center justify-center" style={cardStyle}>
      <div className="card-content flex flex-col items-center text-center bg-green bg-opacity-75 rounded-lg p-4">
        <div>
          <div className="font-bold text-xl text-white mb-2">{title}</div>
          <p className="text-white text-base">{description}</p>
        </div>
        <div className="mt-4">
          <Button text="Apply" url="/apply" />
        </div>
      </div>
    </div>
  );
};

export default Card;
