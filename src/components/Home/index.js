import React from 'react';
import DisplayCard from '../Tool/displayCard'; 
import Banner from '../Banner/Banner.js';
import bannerImage from '../../Assests/Image/Banner.jpg'

const Home = () => {
  return (
    
      
     <div>
      <Banner imageSrc={bannerImage} text="Easy way to take loan" />
      <DisplayCard/>
      </div>
      
      

    
  );
};

export default Home;
