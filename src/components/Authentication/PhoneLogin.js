import React, { useState } from 'react';
import { auth } from './firebase';

function PhoneLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOTP = async () => {
    try {
      const confirmation = await auth.signInWithPhoneNumber(phoneNumber);
      setConfirmationResult(confirmation);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const verifyOTPAndSignIn = async () => {
    try {
      await confirmationResult.confirm(otp);
      console.log('User is signed in.');
      // Handle successful sign in (e.g., redirect user to dashboard)
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      <h2>Phone Login</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={sendOTP} disabled={!phoneNumber}>
        Send OTP
      </button>
      {confirmationResult && (
        <div>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTPAndSignIn} disabled={!otp}>
            Verify OTP & Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default PhoneLogin;
