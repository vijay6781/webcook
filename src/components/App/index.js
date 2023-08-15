import React from 'react';
import Navigation from '../Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Footer from '../Footer';
import SignIn from '../Authentication/SignIn';
import SignOut from '../Authentication/SignOut';
import MyAccount from '../MyAccount/MyAccount';
import Apply from '../Apply'


const App = () => {
  console.log("vk222",process.env);
  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignOut />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/Apply" element={< Apply/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
