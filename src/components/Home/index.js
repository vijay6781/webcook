import React from 'react';
import DisplayCard from '../Tool/displayCard'; 
import Banner from '../Banner/Banner.js';
import bannerImage from '../../Assests/Image/Banner3.jpg'
import Card from '../Card';

const Home = () => {
  return (
    
      
     <div>
      <Banner imageSrc={bannerImage} text="Make Website for your bussiness" text1="make your own brand at low price" />
      <DisplayCard/>
      <Card/>
      
      
      </div>
      
      

    
  );
};

export default Home;
