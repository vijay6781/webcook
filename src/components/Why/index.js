import React from 'react';
import { FaBriefcase, FaMoneyBillAlt, FaClock } from 'react-icons/fa';

const WhyChooseOkayResult = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-green-500 to-pink-500 text-white p-8 text-center relative">
      <h2 className="text-3xl font-bold mb-4">Why Choose OkayResult.com?</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6 ">
        <div className="flex-1 bg-white bg-opacity-80 p-6 rounded-lg transition-transform transform hover:scale-105">
          <FaBriefcase className="text-5xl mx-auto mb-4 text-cyan-400 " />
          <h3 className="text-2xl font-bold mb-2 text-cyan-400">Professional Websites</h3>
          <p className="text-lg font-bold mb-2 text-cyan-300">We create professional websites tailored to your business needs.</p>
        </div>
        <div className="flex-1 bg-white bg-opacity-80 p-6 rounded-lg transition-transform transform hover:scale-105">
          <FaMoneyBillAlt className="text-5xl mx-auto mb-4 text-green-400" />
          <h3 className="text-2xl font-bold mb-2 text-green-400">Affordable Pricing</h3>
          <p className="text-lg font-bold mb-2 text-green-300">Get a high-quality website for your business without breaking the bank.</p>
        </div>
        <div className="flex-1 bg-white bg-opacity-80 p-6 rounded-lg transition-transform transform hover:scale-105">
          <FaClock className="text-5xl mx-auto mb-4 text-pink-400" />
          <h3 className="text-2xl font-bold mb-2 text-pink-400">Quick Turnaround</h3>
          <p className="text-lg font-bold mb-2 text-pink-300 ">We understand the importance of time. Get your website up and running in no time.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseOkayResult;
