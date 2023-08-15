import React from 'react';
import SignIn from '../Authentication/GoogleAuth';
import Button from '../Tool/button';
import { auth } from '../Authentication/firebase';
import Sign_In from '../Authentication/SignIn';

function Navigation() {
  return (
    <nav className="flex flex-wrap items-center justify-center md:justify-end py-2.5 bg-gradient-to-r from-blue-300 to-blue-300">
      <a href="/" className="mr-4 mb-2 md:mb-0 text-black font-bold text-lg md:text-2xl">Home</a>
      <a href="/About" className="mr-4 mb-2 md:mb-0 text-black font-bold text-lg md:text-2xl">About</a>
      <SignIn/>
    </nav>
  );
}

export default Navigation;
