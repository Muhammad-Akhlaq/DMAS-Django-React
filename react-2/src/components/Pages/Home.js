import React from 'react';

import Herosection from '../Herosection/Herosection';
import About from './Extrapages/About';
import Awareness from './Awareness';
//import '../../App.css';
import Footer from '../../components/Footer/Footer';
import Contact from './Extrapages/Contact';
import { Link } from 'react-router-dom';
function Home() {
    return (
      <>
      
        <Herosection />
        
        <About/>
        <Contact/>
       
        
        
        </>
    );  
}

export default Home
