/* ChatSupport.js */
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import './ChatSupport.css';

const ChatSupport = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const db = firebase.firestore();
  const usersRef = db.collection('users');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !mobile) return;
    await usersRef.add({
      name,
      mobile,
    });
    setName('');
    setMobile('');
    setIsOpen(true);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await db.collection('messages').add({
      name,
      message,
      timestamp: new Date(),
    });
    setMessage('');
  };

  useEffect(() => {
    const unsubscribe = db.collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(newMessages);
    });
    return () => unsubscribe();
  }, [db]);

  return (
    <div className={`chat-support ${isOpen ? 'open' : ''}`}>
      <div className="chat-support-content">
        <button className="chat-support-close" onClick={() => setIsOpen(false)}>
          &#10005;
        </button>
        <div className="chat-support-inner">
          <h2>Chat Support</h2>
          <div className="messages" style={{ flexDirection: 'column-reverse' }}>
            {messages.map((msg, index) => {
              if (msg.name === name) {
                return (
                  <div key={index} className="message sent">
                    <div className="message-content">{msg.message}</div>
                  </div>
                );
              } else if (msg.name === 'Chat Bot') {
                return (
                  <div key={index} className="message received">
                    <div className="message-content">{msg.message}</div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          {isOpen && !name && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="chat-support-input"
              />
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Your Mobile Number"
                required
                className="chat-support-input"
              />
              <button type="submit" className="chat-support-submit">
                Submit
              </button>
            </form>
          )}
          {isOpen && name && (
            <form onSubmit={handleMessageSubmit}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                required
                className="chat-support-input"
              />
              <button type="submit" className="chat-support-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
