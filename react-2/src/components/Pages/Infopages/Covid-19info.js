import React,{Component} from 'react'

import hand from '../../images/hand.jpg';
import symptoms from '../../images/symptoms1.jpg';
import covid from '../../images/covid1.jpg';
import symptomdetails from '../../images/symptomdetails1.jpg';
import step1 from "../../images/Step1.jpg";
import step2 from "../../images/Step2.jpg";
import step3 from "../../images/Step3.jpg";
import step4 from "../../images/Step4.jpg";
import step5 from "../../images/Step5.jpg";
import step6 from "../../images/Step6.jpg";
import step7 from "../../images/Step7.jpg";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import "./Earthquakeinfo.css";
class Covid19 extends React.Component {
    state = {
        istogleOn: false,
      };
      toglepersonhandler = () => {
        this.setState((state) => ({
          istogleOn: !state.istogleOn,
        }));
      };
    render() {
        
    return (
        <>
        <div className="container ">
 
     
 
     <h1 className="title-3">ABOUT CORONAVIRUS (COVID-19)</h1>
     <img  src={hand} className='img'></img>
     <div>
         <h2 className='title-4'>Fast Fact</h2>
         <ul  className='paragraph'>
         COVID-19 is a new infectious disease caused by the SARS-CoV-2 virus.
The key symptoms of COVID-19 are a fever, dry cough, tiredness and loss of taste or smell.
COVID-19 affects different people in different ways. Some people do not have any symptoms and may not even know they have the virus, while others get seriously ill and need hospital care.
Physical distancing, wearing a face mask around other people and frequent handwashing are some of the best ways to prevent COVID-19.
If you think you have symptoms of COVID-19, stay at home and call your local health authority. They will tell you what to do next. c
         </ul>
     </div>
         <p className='paragraph1'><strong>Covid-19 safety precautions</strong> you
          should follow regardless of where you live. Taking time to review tip
          s about the following Covid-19 safety issues can help you 
         create a safer and more secure living environment for you, your friends, and family.. </p>
 
         
         <h2 className='title-4'>What is COVID-19?</h2>
     <ul >
     
<p className='paragraph'>COVID-19, otherwise known as coronavirus disease 2019, is a new infectious disease caused by a previously unknown virus called SARS-CoV-2.</p>

<h3 className='title-4'>What are the symptoms of COVID-19?</h3>
<p className='paragraph'>The most common symptoms of COVID-19 are:

fever,
dry cough,
tiredness,
loss of taste or smell.
Other symptoms include: nasal congestion, conjunctivitis (red eyes), sore throat, headache, muscle or joint pain, skin rash, nausea or vomiting, diarrhoea, chills or dizziness. 

Some people get more seriously ill with COVID-19 and may have symptoms such as shortness of breath, loss of appetite, confusion, chest pain or a high temperature. These people will need medical care. In critical cases, COVID-19 can lead to death.

COVID-19 affects different people in different ways. Some people do not have any symptoms and may not even know they have the virus. You can still pass COVID-19 on even if you aren’t showing any symptoms, so it’s important to always follow the prevention advice.</p>

     </ul>
     <img  src={symptoms} className='img'></img>
     
<h2 className='title-4'>Who is most at-risk from COVID-19?</h2>
<ul className='paragraph'>
<p >Anyone can get COVID-19 and become seriously ill. However, people over 60 years old and those with health conditions such as high blood pressure, heart or lung problems, diabetes or cancer are at a higher risk of developing serious illness.

People living with HIV who have a compromised immune system – those with a low CD4 count, a high viral load or recent opportunistic infection – are also more at-risk.

There is currently no evidence to suggest that people living with HIV and on effective antiretroviral treatment are at an increased risk of getting COVID-19 or developing severe symptoms.</p>
</ul>
<h2 className='title-4'>How is COVID-19 passed on?</h2>
<p className='paragraph'>COVID-19 is passed on through respiratory droplets. These are tiny droplets that come from your nose and mouth when you sneeze, cough, breathe, speak or sing.

COVID-19 is normally passed on through close contact with someone who currently has the virus. When you are in close contact, you are likely to breathe in the respiratory droplets from their mouth and nose, which can contain the virus.

There’s a greater risk of getting COVID-19 in places where people are closer together and spend more time together. This includes indoor, crowded and poorly ventilated spaces, such as restaurants, gyms, nightclubs, offices and places of worship.

Respiratory droplets from coughs and sneezes can also land on surfaces. The virus is then spread when another person comes into contact with these droplets and touches their own eyes, nose or mouth, without washing their hands first.</p>
<h3 className='title-4'>How can I prevent COVID-19?</h3>
<ul className='paragraph'><li>The best ways to protect yourself and others from COVID-19 are:</li>
<li>Staying at least one metre away from people as much as possible, and even greater distance when you are indoors.</li>
<li>Wearing a face mask when you are around others.</li>
<li>There are two types of face masks, fabric masks (which you can make yourself and are suitable for most people) and medical masks.</li>
<li>As medical masks are in short supply, they should only be worn by healthcare workers, people with COVID-19 symptoms and those caring for people with suspected or confirmed cases of COVID-19. When it’s not possible to maintain a distance of one meter from others, people over 60 and those with underlying health conditions should also wear medical masks.</li>
</ul>
<img  src={covid} className='img'></img>

<h3 className='title-4'>What should I do if I think I have COVID-19?</h3>
<ul className='paragraph'><li>You will need to stay at home and self-isolate if you have symptoms of COVID-19 – even if they are mild. Call your local health authority for advice. Don’t visit the clinic, as you could pass the virus onto others</li>
<li>Do not leave your home for any reason during this time, including to go to work or school. Ask friends or neighbours to bring you any supplies you need. They should leave these outside and not enter your home. The people you live with should also stay home for at least 14 days from when you first noticed symptoms to prevent the virus from being passed on.</li>
<li>If you have difficulty breathing and/or persistent pain in your chest, call your health provider immediately.

Most people with COVID-19 recover from the virus without the need for hospital treatment.</li>

</ul>
<img  src={symptomdetails} className='img'></img>
<h3 className='title-4'>Is there a vaccine for COVID-19?</h3>
<ul className='paragraph'><li>The first COVID-19 vaccines are beginning to be offered to people in some countries. COVID-19 vaccines work by helping our bodies develop immunity to coronavirus, the virus that causes COVID-19. This means that if you are exposed to the virus, your body will be ready to respond to it and you will be less likely to get seriously ill.</li>
<li>The first COVID-19 vaccines are beginning to be offered to people in some countries. COVID-19 vaccines work by helping our bodies develop immunity to coronavirus, the virus that causes COVID-19. This means that if you are exposed to the virus, your body will be ready to respond to it and you will be less likely to get seriously ill.</li>
<li>Even after having the vaccine, it’s important to follow prevention measures such as social distancing and wearing a mask until the number of people with COVID-19 falls to a safe level in your area.</li>
<li>Follow the official advice in your area to find out when the vaccine will be available to you.</li>
</ul>
<br/><br/>
  </div>
 

  <div className="side-div-earthquake">
          <h3 className="h4-earthquake"> Covid-19 Precautions</h3>

          <ul className="side-div-p">
            <div className="earth">
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ shows: !this.state.shows });
                }}
              >
                {this.state.shows ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              Wash Your Hand
            </div>

            <div>
              {this.state.shows ? (
                <div>
                  
                  <p style={{fontSize:'14px'}}>
                    Step 1: wash your hands frequently for 20 Seconds.
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show2: !this.state.show2 });
                }}
              >
                {this.state.show2 ? <FaAngleDown /> : <FaAngleRight />}
              </button>{" "}
              Hand Senitizer{" "}
            </div>
            <div>
              {this.state.show2 ? (
                <div>
                  
                  <p style={{fontSize:'14px',textAlign:'center'}}>
                    Step 2: Always Senitize your hand when you go outside.
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show3: !this.state.show3 });
                }}
              >
                {this.state.show3 ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              Wearing a face mask
            </div>
            <div>
              {this.state.show3 ? (
                <div>
                 
                  <p style={{fontSize:'14px'}}>
                    Step 3: Wearing a face mask when you are around others.
There are two types of face masks, fabric masks (which you can make yourself and are suitable for most people) and medical masks.
                  </p>
                </div>
              ) : null}
            </div>
            <div className="earth">
              {" "}
              <button
                className="button-size"
                onClick={() => {
                  this.setState({ show4: !this.state.show4 });
                }}
              >
                {this.state.show4 ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              Making Distance
            </div>
            <div>
              {this.state.show4 ? (
                <div>
                  
                  <p style={{fontSize:'14px'}}>
                    Step 4: Staying at least one metre away from people as much as possible, and even greater distance when you are indoors.
                  </p>
                </div>
              ) : null}
            </div>
           
           
          
           
           
           
          </ul>
          <h3 style={{marginTop:'40px'}} className="h4-earthquake"> Helpful Links</h3>
          <ul className="side-div-p">
            <a href="http://cms.ndma.gov.pk/" target="_blank">
              NDMA{" "}
            </a>{" "}
            <br />
            <a href="https://www.dawn.com/news/1623947" target="_blank">
              Dawn.com{" "}
            </a>{" "}
            <br />
            <a href="https://covid.gov.pk/" target="_blank">
              covid.Gov
            </a>{" "}
            <br />
            
            
            <a href="https://mil.wa.gov/" target="_blank">
              {" "}
              WA State EMD
            </a>{" "}
            <br />
            <a
              href="https://waterdata.usgs.gov/wa/nwis/current?type=flow"
              target="_blank"
            >
              USGS-Real Time Data
            </a>{" "}
            <br />
            <br />
          </ul>
        </div>
     
     
 
 
        </>
     )
 }
}
 export default Covid19
 
   
