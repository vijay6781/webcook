import React, { useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './Apply.css';
import { useNavigate } from 'react-router-dom'; 
import {firebaseConfig} from '../Authentication/firebase.js'
import countries from '../../constants/Country'

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore(); // Get a reference to Firestore


function Apply() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const navigate = useNavigate(); // Get the history object from React Router
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleCountryChange = (input) => {
    const inputValue = input.toLowerCase();
    console.log('inputValue',inputValue)
   
    const filtered =inputValue? countries.filter(
      (country) => country.toLowerCase().startsWith(inputValue)
    ):[];
    setFilteredCountries(filtered);

    setSelectedCountry(input);
   
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setFilteredCountries([]);
  };

  const handleApply = async () => {
    try {
      // Create a document in Firestore with the loan application data
      await firestore.collection('Webcook').add({
        name,
        mobileNumber,
        // loanAmount: parseFloat(loanAmount),
        companyName,
        email,
        selectedCountry,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setSubmitted(true); // Mark form as submitted
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  // Use useEffect to redirect after 3 seconds when submitted becomes true
  useEffect(() => {
    if (submitted) {
      const redirectTimeout = setTimeout(() => {
        navigate('/'); // Redirect to home page
      }, 4000); // Wait for 3 seconds before redirecting

      return () => clearTimeout(redirectTimeout);
    }
  }, [submitted, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-grey-400 to-blue-500">
      <div className={`apply-container ${submitted ? 'submitted' : ''}`}>
        {submitted ? (
          <div className="thank-you">
            <h2 className="apply-title">Thank You!</h2>
            <p>Your application has been submitted successfully.</p>
          </div>
        ) : (
          <>
            <h2 className="apply-title">Apply-form</h2>
            <label className="apply-label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="apply-input" 
              required
            />
            <label className="apply-label">Mobile Number:</label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="apply-input"
            />
            {/* <label className="apply-label">Loan Amount:</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="apply-input"
            /> */}
            <label className="apply-label">Website Type </label>
            <input
              type="text"
              value={companyName}
              placeholder='eg: website for my shop'
              onChange={(e) => setCompanyName(e.target.value)}
              className="apply-input"
            />
            <label className="apply-label">Email Id:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="apply-input"
            />
            <label className="apply-label">Country:</label>
        <input
          type="text"
          value={selectedCountry}
          onChange={(e) => handleCountryChange(e.target.value)}
          className="apply-input"
        />
        <ul className="country-suggestions text-white">
          {filteredCountries.map((country) => (
            <li key={country} onClick={() => handleCountrySelect(country)}>
              {country}
            </li>
          ))}
          </ul>
            <button onClick={handleApply} className="apply-button">
              Apply
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Apply;


