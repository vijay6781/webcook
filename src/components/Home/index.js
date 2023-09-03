import React from 'react';
import DisplayCard from '../Tool/displayCard'; 
import Banner from '../Banner/Banner.js';
import bannerImage from '../../Assests/Image/Banner3.jpg'

const Home = () => {
  return (
    
      
     <div>
      <Banner imageSrc={bannerImage} text="Make Website for your bussiness" text1="with affordable price" />
      <DisplayCard/>
      </div>
      
      

    
  );
};

export default Home;
