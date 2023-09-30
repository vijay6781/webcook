import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to okayresult.com, a freelancing platform connecting clients and freelancers. These Terms and Conditions govern your use of our website and services. By accessing or using okayresult.com, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you may not use our services.
      </p>

      <h2 className="text-xl font-bold mb-2">User Responsibilities</h2>
      <p className="mb-4">
        <strong>Account Registration:</strong> You must provide accurate and complete information when creating an account on okayresult.com. You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activities that occur under your account.
      </p>

      <p className="mb-4">
        <strong>Project Listings:</strong> Project listings must be accurate, clear, and not violate any laws or regulations. You agree not to post projects that involve illegal activities, adult content, or violate intellectual property rights.
      </p>

      <h2 className="text-xl font-bold mb-2">Payment and Fees</h2>
      <p className="mb-4">
        Fees for using our platform may apply. Details of these fees will be provided in our Fee Policy. Payments for services rendered on our platform will be processed according to our Payment Policy.
      </p>

      <h2 className="text-xl font-bold mb-2">Communication and Interaction</h2>
      <p className="mb-4">
        Users are expected to communicate respectfully and professionally with each other. Harassment, hate speech, or any form of abusive behavior will not be tolerated.
      </p>

      {/* Add more sections as needed */}
      
      <h2 className="text-xl font-bold mb-2">Governing Law</h2>
      <p className="mb-4">
        These terms shall be governed by and construed in accordance with the laws of India.
      </p>

      <h2 className="text-xl font-bold mb-2">Changes to these Terms</h2>
      <p className="mb-4">
        We may update these Terms and Conditions as necessary to reflect changes in our services and practices.
      </p>

      <p className="mt-8 text-gray-600 text-sm">
        Last Updated: [30-9-2023]
      </p>
    </div>
  );
};

export default TermsAndConditions;
