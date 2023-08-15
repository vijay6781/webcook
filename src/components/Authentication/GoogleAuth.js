import React, { useEffect, useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import HumanLogo from '../../Assests/Image/human-icon.svg'; // Update the path to your human logo

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [photoUrl, setPhotoUrl] = useState('');
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const { email, photoURL } = data.user;
        console.log(data.user);
        setPhotoUrl(photoURL);
        setUser(email);
        localStorage.setItem('email', email);
        localStorage.setItem('photo', photoURL);
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  };

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
        setPhotoUrl('');
        setShowLogoutButton(false);
        localStorage.removeItem('email');
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storePhoto = localStorage.getItem('photo');
    if (storedEmail) {
      setUser(storedEmail);
    }
    if(storePhoto) {
      setPhotoUrl(storePhoto);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user ? (
        <div className="relative">
          <div
            className="rounded-full overflow-hidden cursor-pointer mr-6"
            onMouseEnter={() => setShowLogoutButton(true)}
            onMouseLeave={() => setShowLogoutButton(false)}
          >
            {showLogoutButton ? (
              <span
                className="h-12 w-14 bg-gradient-to-green from-pink-500 to-blue-500 flex items-center justify-center text-blue font-bold cursor-pointer mr-4"
                onClick={handleSignOut}
              >
                Logout
              </span>
            ) : (
              <img
                src={photoUrl}
                alt="User"
                className="h-10 w-10 mx-auto my-auto"
              />
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="bg-gradient-to-r from-green-500 to-pink-500 rounded-full p-2 flex items-center justify-center cursor-pointer mr-6"
        >
          <img src={HumanLogo} alt="Sign In" className="h-6 w-6"  />
        </button>
      )}
    </div>
  );
};

export default SignIn;
