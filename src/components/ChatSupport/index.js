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
  const messagesRef = db.collection('messages');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !mobile) {
      alert('Please provide both your name and mobile number.');
      return;
    }
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
    if (!message) {
      alert('Please enter a message before sending.');
      return;
    }

    const userMessages = messages.filter(msg => msg.name === name);
    if (userMessages.length >= 10) {
      alert('You have reached the message limit for this session.');
      return;
    }

    
    await messagesRef.add({
      name,
      message,
      mobile,
      timestamp: new Date(),
    });
    setMessage('');
  };

  useEffect(() => {
    const unsubscribe = db.collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
      let newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      newMessages= newMessages.filter((item)=>item.name===name);
      setMessages(newMessages);
    });
    return () => unsubscribe();
  }, [db, name]);

  return (
    <div className={`chat-support ${isOpen ? 'open' : ''}`}>
      {!isOpen && !name && (
        <button
          className="chat-support-button bg-gradient-to-r from-cyan-400 to-light-blue-500"
          onClick={() => setIsOpen(true)}
        >
          Chat Support
        </button>
      )}
      <div className="chat-support-content">
        <button className="chat-support-close" onClick={() => setIsOpen(false)}>
          &#10005;
        </button>
        <div className="chat-support-inner">
          <h2>Chat Support</h2>
          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.name === 'User' ? 'sent' : 'received'}`}
              >
                <div className="message-content">{msg.message}</div>
              </div>
            ))}
          </div>
          {isOpen && !name && (
            <form onSubmit={handleSubmit}>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Your Mobile Number"
                required
                className="chat-support-input"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onClick={(e) => e.stopPropagation()} // Prevent input on click
                placeholder="Your Name"
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
