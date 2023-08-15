import React, { useEffect, useState } from 'react';
import { auth } from '../Authentication/firebase'; // Update the import path
import './MyAccount.css'; // Import the CSS file

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          name: authUser.displayName,
          email: authUser.email,
          image: authUser.photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleCardToggle = () => {
    setIsCardOpen(!isCardOpen);
  };

  if (!user) {
    return null; // You can show a loading spinner or handle this case differently
  }

  return (
    <div className="my-account">
      <div className="user-avatar" onClick={handleCardToggle}>
        <img src={user.image} alt="User" className="user-image" />
      </div>
      {isCardOpen && (
        <div className="user-card">
          <img src={user.image} alt="User" className="user-image" />
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
          </div>
          <button className="logout-button" onClick={() => auth.signOut()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
