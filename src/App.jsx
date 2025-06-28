import React from 'react'
import './index.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection'
import About from './component/About'
import Services from './component/Services'
import Giving from './component/Giving'
import Work from './component/Work'
import Dummy from './component/Dummy'
import Customer from './component/Customer'
import Track from './component/Track'
import Frequently from './component/Frequently'
import Fotter from './component/Fotter'
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <Services/>
      <Giving/>
      <Work/>
      <Dummy/>
      <Customer/>
      <Track/>
      <Frequently/>
      <Fotter/>
    </div>
  );
};




export default App
