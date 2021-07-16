import React, { useState, useEffect,Fragment, useLayoutEffect } from 'react';
import {Button} from '../Button/Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import ProfileDropdown from './ProfileDropdown';
//import {Nav,NavDropdown,} from 'react-bootstrap';
import './Navbar.css';
import Dropdowns from './Dropdowns';
import { FaHome } from 'react-icons/fa';
import { FaMedrt } from 'react-icons/fa';
import { FaBars,FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import icon from '../images/FYP.png';
import disaster from '../images/FYP.png';
//import {fatimes} from 'react-icons/fa';

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdowns, setDropdowns] = useState(false);
  const [Profiledropdown, setProfileDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const username=localStorage.getItem('username')

  const showButton = () => {
    if (window.innerWidth <= 280) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
    showButton();
  }, []);

  

  const onMouseEnter = () => {
    if (window.innerWidth < 280) {
     
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 280) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnterr = () => {
    if (window.innerWidth < 280) {
     
      setProfileDropdown(false);
    } else {
      setProfileDropdown(true);
    }
  };

  const onMouseLeavee = () => {
    if (window.innerWidth < 280) {
      setProfileDropdown(false);
    } else {
      setProfileDropdown(false);
    }
  };
  const onMouseEnters = () => {
    if (window.innerWidth < 280) {
      setDropdowns(false);
    } else {
      setDropdowns(true);
    }
  };

  const onMouseLeaves = () => {
    if (window.innerWidth < 280) {
      setDropdowns(false);
    } else {
      setDropdowns(false);
    }
  };


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <img className='icon-img' src={disaster}/>
            Disaster Assistance
          </Link>
          <div className='menu-icon' onClick={handleClick}>
         {click? <FaTimes className='fa-bars'/>:<FaBars className='fa-bars'/>}
            
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/'  className='nav-links' onClick={closeMobileMenu}>
              <FaHome />Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Awareness'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Awareness
              </Link>
            </li>
            
            <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            
              <Link
             
                
                className='nav-links'
                onClick={closeMobileMenu}>
                Estimation<IoMdArrowDropdown onClick/>
              
              </Link>

              {dropdown  && < Dropdown />}
              
            </li>
            <li className='nav-item'
            onMouseEnter={onMouseEnters}
            onMouseLeave={onMouseLeaves}
            >
            
              <ul
              
                
                className='nav-links'
                onClick={closeMobileMenu}>
                Event <IoMdArrowDropdown onClick/>
                
              </ul>
              {dropdowns && <Dropdowns />}
             
            </li>
           
            <li className='nav-item'>
              <Link
                to='/Live'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Live News
              </Link>
            </li>
           
           
            <li className='nav-item'>
              <Link
                to='/Api'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Weather
              </Link>
            </li>
           

            <li>
            <ul className='Navbar-Login' >
        {isAuth === true ? (
          <Fragment>
            
            <ul className='nav-item'
            onMouseEnter={onMouseEnterr}
            onMouseLeave={onMouseLeavee}
            >
            
              <Link
              
                
                className='nav-links'
                onClick={closeMobileMenu}>
              {username}<IoMdArrowDropdown onClick/>
                
              </Link>
              {Profiledropdown && <ProfileDropdown />}
             
            </ul>
          </Fragment>
        ) : (
          <Fragment>
            
            
            <div className='hero-btns' style={{margin:"15px",justifyContent:'center'}}>
          <Link 
          to='/Login'>
        <button className='Button-home'> Login</button>
        
        </Link>
        </div>
          </Fragment>
        )}
      </ul>
            </li>
            <nav>
      
     
    </nav>
         
          </ul>
          
         
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;