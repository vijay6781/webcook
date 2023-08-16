import React from 'react';
import DisplayCard from '../Tool/displayCard'; 
import Banner from '../Banner/Banner.js';
import bannerImage from '../../Assests/Image/Banner3.jpg'

const Home = () => {
  return (
    
      
     <div>
      <Banner imageSrc={bannerImage} text="Easy way to take loan" text1="Fast Loan" />
      <DisplayCard/>
      </div>
      
      

    
  );
};

export default Home;
