import React from 'react';
import Button from './button'; // Update the import to match your file name
import './Card.css'; // Import the CSS file

const Card = ({ title, description, imageUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="card-container" style={cardStyle}>
      <div className="card-content">
        <div className="text-center">
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-white text-base">{description}</p>
        </div>

        <div className="mt-auto"> {/* Use mt-auto for pushing the button to the bottom */}
          <div className="ml-11">
            <Button text="Apply" url="/apply" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
