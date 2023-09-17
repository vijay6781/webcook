import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// firebase.initializeApp(firebaseConfig);

const SignUpLogout = () => {
  const [user, setUser] = useState(null);
  console.log('user',user);
//   const history = useHistory();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      alert('Error signing up: ' + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      alert('Error signing out: ' + error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      {user ? (
        <>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
            Sign Out
          </button>
        </>
      ) : (
        <button onClick={handleSignUp} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Sign Up with Google
        </button>
      )}
    </div>
  );
};

export default SignUpLogout;
