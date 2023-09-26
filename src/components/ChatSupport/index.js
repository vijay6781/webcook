import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import './ChatSupport.css';

const ChatSupport = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsOpen(false);

    const db = firebase.firestore();
    const usersRef = db.collection('users');

    await usersRef.add({
      name,
      mobile,
    });

    setName('');
    setMobile('');
  };

  return (
    <div className={`chat-support ${isOpen ? 'open' : ''}`}>
      <button
        className="chat-support-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Need Help?
      </button>
      <div className="chat-support-content">
        <button className="chat-support-close" onClick={() => setIsOpen(false)}>
          &#10005;
        </button>
        <div className="chat-support-inner">
          <h2>Chat Support</h2>
          {isOpen && (
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
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
