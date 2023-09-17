import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const db = firebase.firestore();
        const messagesRef = db.collection('messages');
        messagesRef.orderBy('timestamp').onSnapshot((snapshot) => {
          const newMessages = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setMessages(newMessages);
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const db = firebase.firestore();
      const messagesRef = db.collection('messages');
      await messagesRef.add({
        text: message,
        userId: user.uid,
        firstName: user.displayName.split(' ')[0],
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage('');
    }
  };

  const handleDeleteMessage = async (msg) => {
    try {
      const db = firebase.firestore();
      const messagesRef = db.collection('messages');
      await messagesRef.doc(msg.id).delete();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      {user ? (
        <>
          <ul className="mb-4">
            {messages.map((msg) => (
              <li key={msg.id} className="mb-2">
                <div className="flex items-center">
                  <img
                    src={msg.photoURL}
                    alt={msg.firstName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{msg.text}</span>
                  {user.uid === msg.userId && (
                    <button
                      onClick={() => handleDeleteMessage(msg)}
                      className="ml-2 text-red-500"
                    >
                      Delete
                    </button>
                  )}
                </div>
                {msg.timestamp && (
                  <div className="text-right text-xs text-gray-500">
                    {new Date(msg.timestamp.toDate()).toLocaleTimeString()}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <form onSubmit={sendMessage} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow border p-2 rounded-l focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
              Send
            </button>
          </form>
        </>
      ) : (
        <>
          <p>Please login to chat</p>
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Chat;
