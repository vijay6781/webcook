import React from 'react';
import Button from './Tool/button';

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      {/* Standard Card */}
      <div className="w-full md:w-1/2 p-6 text-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Standard Plan</h2>
          <ul className="text-gray-600">
            <li className="mb-2">Get Your Business website at affordable price</li>
            <li className="mb-2">You will get webite related to your business</li>
            <li className="mb-2">Go your Business online</li>
            <li className="mb-2">24x7 customer care Service</li>
          </ul>
          <Button  text="Apply" url="/apply" />
        </div>
      </div>

      {/* Advance Card */}
      <div className="w-full md:w-1/2 p-6 text-center mt-4 md:mt-0">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Advance Plan</h2>
          <ul className="text-gray-600">
            <li className="mb-2">Get you Business Website with various feature</li>
            <li className="mb-2">You will get webite related to your business</li>
            <li className="mb-2">Go your business online </li>
            <li className="mb-2">24x7 customer care Service</li>
          </ul>
          {/* <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 mx-auto block">Apply</button> */}
          <Button  text="Apply" url="/apply" />
        </div>
      </div>
    </div>
  );
};

export default Card;
