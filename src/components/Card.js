import React from 'react';
import Button from './Tool/button';

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gradient-to-r mt-2 mb-2 from-pink-500 to-yellow-500">
      {/* Standard Card */}
      <div className="w-full md:w-1/2 p-4 text-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-pink-800">Standard Plan</h2>
          <ul className="text-gray-700 mb-4">
            <li className="mb-2">Affordable stunning business website</li>
            <li className="mb-2">Tailored to your business needs</li>
            <li className="mb-2">Strong online presence</li>
            <li className="mb-2">24x7 customer support</li>
          </ul>
          <Button text="Apply Now" url="/apply" />
        </div>
      </div>

      {/* Advance Card */}
      <div className="w-full md:w-1/2 p-4 text-center mt-4 md:mt-0">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-pink-800">Advanced Plan</h2>
          <ul className="text-gray-700 mb-4">
            <li className="mb-2">Powerful advanced business website</li>
            <li className="mb-2">Customized for your business goals</li>
            <li className="mb-2">Dominant online presence</li>
            <li className="mb-2">24x7 dedicated customer support</li>
          </ul>
          <Button text="Apply Now" url="/apply" />
        </div>
      </div>
    </div>
  );
};

export default Card;
