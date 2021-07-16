import React from 'react';
import './About.css';

//import Footer from '../Footer/Footer'

const About = () => {
  const [header] = React.useState({
    
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Sheraz Liaqat" },
    { id: 2, title: "Email:", text: "17241598-054@uogsialkot.ed.upk" },
    { id: 3, title: "Name:", text: "Rizwan Bashir" },
    { id: 4, title: "Email", text: "17241598-109@uogsialkot.ed.upk" },
    { id: 5, title: "Name:", text: "M akhlaq" },
    { id: 6, title: "Email:", text: "17241598-187@uogsialkot.ed.upk" },
    { id: 7, title: "Name:", text: "Mubashar Ateeq" },
    { id: 8, title: "Email", text: "17241598-074@uogsialkot.ed.upk" }
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
        <h1 > About Us</h1>
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          
          <div className="col-6">
            <div className="about__img">
              <img src="/images/about.jpg" alt="disaster" />
            </div>
          </div>
         
          <div className="col-6">
            <div className="about__info">
              <h1 className='mission'>OUR MISSION</h1>
              
              <div className="about__info-p1">
              The Disaster Assistance Team mission is to provide disaster 
              survivors with information, support, services, and a means to access and apply for disaster assistance
               through joint data-sharing efforts between federal, tribal, state, local, and private sector partners.
              </div>
             
              <div className="about__info-p2">
              The DisasterAssistance is used to build relationships and help promote the addition of new assistance for our website. 
              The policy defines the criteria we use to consider agreements to exchange data, links, or information with partners.
              
              </div><br/>
              <div className="commonBorder"></div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                    
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default About;
