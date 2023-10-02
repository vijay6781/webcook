import React from 'react';
import DisplayCard from '../Tool/displayCard'; 
import Banner from '../Banner/Banner.js';
import bannerImage from '../../Assests/Image/Banner3.jpg'
import Card from '../Card';
import CardList from '../Mycard';
import WhyChooseOkayResult from '../Why';
import FAQSection from '../Faq';
const Home = () => {
  return (
    
      
     <div>
      <Banner imageSrc={bannerImage} text="Make Website for your bussiness" text1="make your own brand at low price" />
      <CardList/>
      {/* <DisplayCard/> */}
      <Card/>
      <WhyChooseOkayResult/>
      <FAQSection/>
      
      
      </div>
      
      

    
  );
};

export default Home;
