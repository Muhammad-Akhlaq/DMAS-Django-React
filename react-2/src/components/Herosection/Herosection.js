import React,{useState} from 'react'
import '../../App.css';
import './Herosection.css';
import { IoMdArrowDropdown} from 'react-icons/io';
import homeimage from '../../components/images/home9.jpg';
import { Link } from 'react-router-dom';
import Downs from '../Navbar/Downs';


function Herosection() {
  
  const [downs, setDowns] = useState(false);
  const onMouseEnters = () => {
    if (window.innerWidth < 280) {
      setDowns(false);
    } else {
      setDowns(true);
    }
  };

  const onMouseLeaves = () => {
    if (window.innerWidth < 280) {
      setDowns(false);
    } else {
      setDowns(false);
    }
  };
    return (
        <div className='hero-container'>
        <img className='image' src={homeimage}/>
        <h1>EMERGENCY  ASSISTANCE</h1>
        <p>What are you waiting for?</p>
        
        <div className='hero-btns'>
          <Link
          to='/Login'>
        <button className='Button-home'> GET STARTED</button>
        
        </Link>
        <div className='hero-div'
            onMouseEnter={onMouseEnters}
            onMouseLeave={onMouseLeaves}
            >
               
          <button className='Button-home2'>ESTIMATION< IoMdArrowDropdown /> 
          
          </button>
          {downs && <Downs/>}
          </div>
        </div>
      </div>
    );
}

export default Herosection
