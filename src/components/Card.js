import React from 'react';
import { FaRegLightbulb, FaTools } from 'react-icons/fa';
import Button from './Tool/button';

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-auto bg-gradient-to-r mt-1 mb-1 from-pink-500 to-yellow-500">
      {/* Standard Card */}
      <div className="w-full md:w-1/2 p-4 text-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <FaRegLightbulb className="text-6xl text-pink-800 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-4 text-pink-800">Creative Solutions</h2>
          <p className="text-gray-700 mb-4">
            Get a stunning business website tailored to your specific needs. Establish a strong online presence with 24x7 customer support.
          </p>
          <Button text="Apply Now" url="/apply" />
        </div>
      </div>

      {/* Advance Card */}
      <div className="w-full md:w-1/2 p-4 text-center mt-4 md:mt-0">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <FaTools className="text-6xl text-pink-800 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-4 text-pink-800">Advanced Tools</h2>
          <p className="text-gray-700 mb-4">
            Get an advanced business website with powerful features customized to align perfectly with your business goals. Benefit from 24x7 dedicated customer support.
          </p>
          <Button text="Apply Now" url="/apply" />
        </div>
      </div>
    </div>
  );
};

export default Card;
