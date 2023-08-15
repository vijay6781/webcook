import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Authentication/firebase';

const Sign_In = () => {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  };

  return (
    <button
      onClick={handleSignIn}
      className="bg-gradient-to-r from-green-500 to-pink-500 rounded-full p-2 flex items-center justify-center focus:outline-none"
    >
      <img
        src={localStorage.getItem('photo')}
        alt="Sign In"
        className="h-6 w-6"
      />
    </button>
  );
};

export default Sign_In;
