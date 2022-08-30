import React from 'react';
import MyImage from './keevillage01.jpeg';  
import './App.css'; 

const Home = () => {
  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to anbusivan.com</h1>
      <div className="LandinPage">
       <img src={MyImage}></img>
       <h3 className='heading3'>"The soul of India lives in its villages" - Mahatma Gandhi. </h3>
       <p className='heading3'>My village is a petit abode for happy people.  Here they live in harmony and peace. </p>
       <p className='heading3'>The village people are very hardworking and thus they must have a good source of upliftment.</p>
       <p className='heading3'>The farmers should be facilitated by helping them to leverage their sales, make them notified about the modern techniques used in farming, and give them compensation and knowledge of the true market price of their yield.</p>
      </div>
    </div>
  );
};
  
export default Home;