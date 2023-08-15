import React from 'react';
import { auth } from '../Authentication/firebase';

const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut()
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  };

  return (
    <button
      onClick={handleSignOut}
      className="h-12 w-14 bg-gradient-to-green from-pink-500 to-blue-500 flex items-center justify-center text-blue font-bold rounded-md cursor-pointer mr-4"
    >
      Logout
    </button>
  );
};

export default SignOut;
