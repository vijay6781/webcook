import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import { FaTrash, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Chat.css'; // Add your CSS file for additional styling

const Chat = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleLikeMessage = (msgId) => {
    const db = firebase.firestore();
    const messagesRef = db.collection('messages');
    const messageRef = messagesRef.doc(msgId);

    messageRef.get().then((doc) => {
      if (doc.exists) {
        const currentLikes = doc.data().likes || [];
        if (!currentLikes.includes(user.uid)) {
          currentLikes.push(user.uid);
        } else {
          currentLikes.splice(currentLikes.indexOf(user.uid), 1); // Toggle like
        }
        messageRef.update({
          likes: currentLikes,
        });
      }
    });
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

  useEffect(() => {
    const db = firebase.firestore();
    const messagesRef = db.collection('messages');

    const unsubscribe = messagesRef.orderBy('timestamp').onSnapshot((snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

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
        likes: [], // Initialize likes as an empty array
      });
      setMessage('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow chat-container">
      {user ? (
        <>
          <ul className="message-list">
            {messages.map((msg) => (
              <li key={msg.id} className="message-item">
                <div className="message-content">
                  <div className="user-info">
                    <img
                      src={msg.photoURL}
                      alt={msg.firstName}
                      className="user-avatar"
                    />
                    <span className="user-name">{msg.firstName}</span>
                  </div>
                  <span className="message-text">{msg.text}</span>
                  {msg.timestamp && (
                    <div className="message-time">
                      {new Date(msg.timestamp.toDate()).toLocaleTimeString()}
                    </div>
                  )}
                </div>
                <div className="message-actions">
                  <button
                    onClick={() => handleLikeMessage(msg.id)}
                    className={`like-button ${
                      msg.likes && msg.likes.includes(user.uid) ? 'liked' : ''
                    }`}
                  >
                    <FaHeart />
                  </button>
                  {user.uid === msg.userId && (
                    <button
                      onClick={() => handleDeleteMessage(msg)}
                      className="delete-button"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
                {msg.likes && msg.likes.length > 0 && (
                  <div className="like-count">{msg.likes.length}</div>
                )}
              </li>
            ))}
          </ul>
          <form onSubmit={sendMessage} className="message-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="message-input-field"
              placeholder="Type your message..."
            />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </>
      ) : (
        <>
          <p className="login-prompt">Please login to chat</p>
          <Link to="/" className="login-button">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Chat;

