import React from 'react';
import Button from './Tool/button';

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      {/* Standard Card */}
      <div className="w-full md:w-1/2 p-6 text-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-pink-800">Standard Plan</h2>
          <ul className="text-gray-700 mb-6">
            <li className="mb-2">Get a stunning business website at an affordable price</li>
            <li className="mb-2">Tailored to suit your specific business needs</li>
            <li className="mb-2">Establish a powerful online presence</li>
            <li className="mb-2">Enjoy 24x7 customer support</li>
          </ul>
          <Button text="Apply Now" url="/apply" />
        </div>
      </div>

      {/* Advance Card */}
      <div className="w-full md:w-1/2 p-6 text-center mt-4 md:mt-0">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-pink-800">Advanced Plan</h2>
          <ul className="text-gray-700 mb-6">
            <li className="mb-2">Get an advanced business website with powerful features</li>
            <li className="mb-2">Customized to align perfectly with your business goals</li>
            <li className="mb-2">Establish a dominant online presence</li>
            <li className="mb-2">Benefit from 24x7 dedicated customer support</li>
          </ul>
          <Button text="Apply Now" url="/apply" />
        </div>
      </div>
    </div>
  );
};

export default Card;
