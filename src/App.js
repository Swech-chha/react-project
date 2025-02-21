
import React from 'react';

import './App.css';
import Navbar from './components/navBar';
import ProductList from './components/ProductList';
import img1 from './Images/everest.jpg';
import Footer from './components/Foooter';
import Video from './components/Video';
import Icons from './components/icons'; // Import the Icons component
import TestimonialSlider from "./components/TestimonialSlider";
import Recent from "./components/Recent";
import Foot from './components/Foot';

function App() {
  
  return (
    <>
    <Navbar/>
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
  {/* Image */}
  <img 
    src={img1} 
    alt="Everest" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
  
  {/* Text Overlay */}
  <div 
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'red',
      fontSize: '4rem', // Adjust the font size for "big"
      fontWeight: 'bold',
      fontStyle: 'italic',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Shadow for better visibility
      textAlign: 'center',
    }}
  >
    Visit Nepal <br/>
    2025
  </div>
</div>

    
    <Footer/>
    <ProductList />
    <Video/>
    <Icons/>
    <h2 style={{ textAlign: "center" }}>Testimonials</h2>
    <TestimonialSlider />
    

    <Recent/>
    <Foot/>
    </>
  );
};

export default App;
