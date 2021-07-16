import React, { Component } from 'react'
import './Earthquakeinfo.css';
import Footer from '../../../components/Footer/Footer';
import Imageslider from '../../Slider/Imageslider';
import downimage from '../../images/down.jpg';
import safty from '../../images/drop1.jpg';
import stair from '../../images/stair.jpg';
import building from '../../images/building.jpg';
import chair from '../../images/chair.jpg';
import indoor from '../../images/indoor.jpg';
import outdoor from '../../images/out.jpg';
import car from '../../images/car.jpg';
import help from '../../images/help.jpg';
import wheelchair from '../../images/wheelchair.png';
import step1 from '../../images/Step1.jpg';
import step2 from '../../images/Step2.jpg';
import step3 from '../../images/Step3.jpg';
import step4 from '../../images/Step4.jpg';
import step5 from '../../images/Step5.jpg';
import step6 from '../../images/Step6.jpg';
import step7 from '../../images/Step7.jpg';
import {FaAngleDown,FaAngleRight} from 'react-icons/fa';
import { FaMedrt,FaFacebookF,FaYoutube,FaInstagram,FaLinkedin} from 'react-icons/fa';
import { VscTwitter} from 'react-icons/vsc';


 class Earthquakeinfo extends Component {
    state={
        istogleOn:false
      }
      toglepersonhandler=()=>{
        const doesshow=this.state.persons;
        this.setState({persons: !doesshow})
        this.setState(state=>({
          istogleOn:!state.istogleOn
        }));
      }
        render(){
           
    return (
        <>
        
        <div className='main-div-earthquake'>
     
       < div className="container">

        <div  className="column-right-side">
            <h1 className="title-3">Earthquake Awareness <br/> Preparedness</h1>
            <div className="inc-exp-container">
        <div>
          <h4 className='h1'><i class='fas fa-virus'></i>PREPARING DURING THE PENDAMIC?</h4>
          <p  className="money plus">Please review our guidance on preparing for an earthquake
           while still protecting yourself from COVID-19.</p>
        </div>
        <div>
          <h4 className='h1'><i  class="fa fa-ambulance" ></i>NEED HELP NOW?</h4>
                        
          <p  className="money minus">If you are in immediate need of help, please 
          find an open shelter Having an action plan probability 
          you will make the best decision to prevent injuries. Follow these recommendations during Eartquake.</p>
        </div>
      </div>
            <h4 className="title-4" >“Drop, Cover, Hold”<br/>
            
            </h4>
            <img  src={downimage} className='img'></img>
            
            </div>
            
            <div className="content">
                <div classNamename="text">
                   
    
                
    
                   
                    <h3 className='title-4'> Recommended Earthquake Protection Method</h3>
                    <div className='paragraph'>
                    <p>In recent years, an E-mail has been circulating that describes the “<b>triangle of life</b>,” an
                        alternative to the long-established “<b>Drop, Cover, and Hold</b>” advise. “Drop, Cover, Hold” is
                        still the official recommendation in the United States by many experts including State Emergency
                        Management, the Red Cross, and the Lewis County Division of Emergency Management.</p>
                   
                   
                    
                    </div>
                    
                    <p className='paragraph1'>Earthquakes seldom cause complete building collapse in the United States. The greatest danger is from
                        falling or flying objects. The “Drop, Cover, and Hold” technique is designed to provide the greatest
                        protection from this type of situation.</p>
    
                    
                    <p className='title-4'><b>Why Is “Drop, Cover and Hold” Recommended?</b></p>
                    <ul className='paragraph'>
                        <li>The “duck and cover” protection approach was developed to protect occupants from falling
                            hazards, the greatest danger to the U.S. population during an earthquake. Earthquake events
                            result in more injuries from falling hazards (unsecured furniture and building materials), not
                            overall building collapse. The space under a study table or desk is likely to remain. Pictures
                            from around the world show tables and desks standing with rubble all around them. Tables even
                            hold up floors that have collapsed! “Drop, Cover and Hold” under a table increases the chance of
                            ending up in a survivable void space during an earthquake.</li>
                        <li>Trying to move during shaking puts you at risk: Earthquakes occur without any warning and may be
                            so violent that you cannot run or crawl; therefore, you will most likely be knocked to the
                            ground. It is best to “Drop” before the earthquake drops you. Find nearby shelter or use your
                            arms and hands to “Cover” your head and neck. “Hold” on to your shelter and move with it if it
                            shifts. “Drop, Cover, and Hold” gives you the best overall chance of quickly protecting yourself
                            during an earthquake … even during quakes that cause furniture to move about rooms.</li>
                        <li>The greatest danger is from falling and flying objects. You are much more likely to be injured
                            by TVs, lamps, glass, bookcases, etc.</li>
                        <li>Building collapse is less of a danger. Images of collapsed structures in earthquakes get the
                            most attention from the media, but most United States construction requirements prevent
                            buildings from collapse during earthquakes.</li>
                    </ul>
                   
                    
                </div>
            </div>
    
    
    
            
            <h4 className="title-4">Indoors</h4>
            <img  src={indoor} className='img'></img>
            <div className="content">
                <div >
                    <ul className='paragraph'>
                        <ul>Drop, Cover, Hold” under a sturdy table.</ul>
                        <li>Stay away from windows, objects that could fall.</li>
                        <li><b>Kitchen:</b> Move away from refrigerator, stove, and overhead cabinets.</li>
                    </ul>
                   
                </div>
            </div>
    
            
            
        
            <h4 className="title-4">Outdoors</h4>
            <img  src={outdoor} className='img'></img>
            <div className="content">
                <div className="rich-text">
                    <ul className='paragraph'>
                        <li>Move to a clear area away from trees, signs, building, and electrical wires</li>
                    </ul>
                    
                </div>
                <h4 className="title-4">Driving</h4>
                <img  src={car} className='img'></img>
            <div className="content">
                <div >
                    <ul className='paragraph'>
                        <li>Slowly pull over to the side of the road and stop</li>
                        <li>Avoid overpasses, power lines. Stay in the car until the shaking stops</li>
                    </ul>
                    
                </div>
            </div>
    
    
    
           
            <h4 className="title-4">Downtown:</h4>
            <img  src={stair} className='img'></img>
            <div >
                <div >
                    <ul className='paragraph'>
                        <li>Move away from building fronts</li>
                        </ul>
                        <img  src={building} className='img'></img>
                        <ul className='paragraph'>
                        <li>Protect yourself against falling bricks, glass and other debris</li>
                    </ul>
                    
                </div>
            </div>
    
    
    
            
            <h4 className="title-4">Crowded Store</h4>
            <div className="content">
                <div >
                    <ul className='paragraph'>
                        <li>Do <b>NOT</b> rush from the exits</li>
                        <li>Move away from displace shelves</li>
                        <li><b>&quot;Drop, Cover and Hold&quot;</b></li>
                    </ul>
                    
                </div>
            </div>
    
    
    
            
          
            </div>
    
    
    
           
            <h4 className="title-4"> <i class="fa fa-wheelchair"></i>Wheelchair</h4>
            
            <div clasNAclassNames="content">
                <div >
                    <ul className='paragraph'>
                        <li>Stay in the wheelchair.</li>
                        <li>Move to a safe cover, lock your wheels.</li>
                        <li>Protect your head with your arms (this is the only time you might use a doorway).</li>
                    </ul>
                    
                </div>
            </div>
    
    
    
            
            <div className="content">
            <h4 className="title-4">Theater or stadium:</h4>
                <div >
                    <ul className='paragraph'>
                        <li>If possible, get under the seat. If not, stay in your seat.</li>
                        <li>“Cover” your head with your arms.</li>
                        <li>Do not attempt to leave until the shaking stops.</li>
                    </ul>
                  
                </div>
            </div>
    
    
            <div className="content">
                <div >
                
                    <p className='paragraph'>Data from three University-based studies performed after the Loma Prieta (September, 1989) and
                        Northridge (January, 1994) earthquakes in California indicated Loma Prieta (63 deaths, approximately
                        3,700 injured) and Northridge (57 deaths, 1500 serious injuries) benefited from “Drop, Cover and
                        Hold”. Most injuries were broken bones from falls or broken-glass cuts to bare feet caused by people
                        rushing to leave their homes. There were millions of people in each of these earthquake-affected
                        areas that reported to have “Dropped, Covered, and Held on” during the shaking of the earthquake.
                    </p>
                    <p className='paragraph'>Methods like standing in a doorway, running outside, and some “triangle of life” techniques may
                        increase injury risk and are not recommended in the United States. Official rescue teams that have
                        searched for trapped people after earthquakes, promote the “Drop, Cover, and Hold” method in the
                        United States. Endorsement of “Drop, Cover, and Hold” is also given by emergency managers,
                        researches, and school safety advocates.</p>
                    
                </div>
            </div>
    
    
    
                 
            <h4 className="title-4"> Rescuers and Experts “DO NOT” Recommend<br></br> During An Earthquake</h4>
            
            <div className="content">
                <div className='last-paragraph' >
                    <ul style={{marginBottom:'50px'}} className='paragraph'>
                    
                        <li ><h2>DO NOT</h2> run outside or to other rooms during shaking. The area near the exterior walls of
                            a building is the most dangerous place to be. Windows, facades and architectural details are
                            often the first parts of the building to collapse. Stay away from the danger zone. Also, shaking
                            can be so strong that you will not be able to move far without falling down.</li>
                        <li><h2>DO NOT</h2> stand in a doorway. In modern houses, doorways are no stronger than any other part
                            of the house. The doorway does not protect you from the most likely source of injury, falling or
                            flying objects. And, doorways usually only accommodate one person.</li>
                        <li><h2>DO NOT</h2> get out of your car and lay next to it. This is very dangerous because the car can
                            move and crush you, and other drivers may not see you on the ground.</li>
                    </ul>
    
    
    
                           
                   
                  
                    
                </div>
            </div>
    
        </div>
        <div className='side-div-earthquake'>
            <h3 className='h4-earthquake'> Eartquake Safety Tips</h3>
           
            <ul className='side-div-p'>
           
                <div className='earth'>
                    
                
                    
                     <button className='button-size'
 
 onClick={()=>{this.setState({shows:!this.state.shows})}}>
     { this.state.shows ?<FaAngleDown/>:<FaAngleRight/>}</button>Secure Your Space</div>
             
             <div>
                {
                    this.state.shows? <div><img  src={step1} ></img><p>Step 1: Secure your space by identifying hazards and securing moveable items.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show2:!this.state.show2})}}>{ this.state.show2 ? 
    <FaAngleDown/>:<FaAngleRight/>}</button> Plan to be Safe </div>
                 <div>
                {
                    this.state.show2? <div><img  src={step2} ></img><p>Step 2: Plan to be safe by creating a disaster plan and deciding how you will communicate in an emergency.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show3:!this.state.show3})}}>{ this.state.show3 ?<FaAngleDown/>:<FaAngleRight/>}</button>Organize Disaster Supplies</div>
                <div>
                {
                    this.state.show3? <div><img  src={step3} ></img><p>Step 3: Organize disaster supplies in convenient locations.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show4:!this.state.show4})}}>{ this.state.show4 ?<FaAngleDown/>:<FaAngleRight/>}</button>Minimize Financial Hardship</div>
  <div>
                {
                    this.state.show4? <div><img  src={step4} ></img><p>Step 4: Minimize financial hardship by organizing
                         important documents, strengthening your property, and considering insurance.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show5:!this.state.show5})}}>{ this.state.show5 ?<FaAngleDown/>:<FaAngleRight/>}</button>Drop, Cover, and Hold On</div>
  <div>
                {
                    this.state.show5? <div><img  src={step5} ></img><p>Step 5: Drop, cover, and hold on when the earth shakes..</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show6:!this.state.show6})}}>{ this.state.show6 ?<FaAngleDown/>:<FaAngleRight/>}</button>Improve Safety</div>
  <div>
                {
                    this.state.show6? <div><img  src={step6} ></img><p>Step 6: Improve safety after earthquakes by evacuating if necessary, helping the 
                        injured, and preventing further damage.</p></div> : null
                }
                
            </div>
                <div className='earth'> <button className='button-size'
 
 onClick={()=>{this.setState({show7:!this.state.show7})}}>{ this.state.show7 ?<FaAngleDown/>:<FaAngleRight/>}</button> Reconnect and Restore</div>
  <div>
                {
                    this.state.show7? <div><img  src={step7} ></img><p>Step 7: Restore daily life by reconnecting with others, 
                        repairing damage, and rebuilding community.</p></div> : null
                }
                
            </div>
            </ul>
            <h3 style={{marginTop:'40px'}} className='h4-earthquake'> Helpful Links</h3>
            <ul className='side-div-p'>
            < a href='http://cms.ndma.gov.pk/' target="_blank">NDMA </a> <br/> 
            < a href="https://www.fema.gov/" target="_blank">FEMA </a> <br/> 
            < a href='https://www.ready.gov/' target="_blank">Ready.Gov</a> <br/> 
            < a href='https://www.weather.gov/' target="_blank">National Weather Service</a>  <br/>
            < a href='https://mil.wa.gov/' target="_blank"> WA State EMD</a> <br/>
            < a href='https://waterdata.usgs.gov/wa/nwis/current?type=flow' target="_blank">USGS-Real Time  Data</a> <br/><br/>
           
            </ul>
          </div>
       {/*   <div className='side-div-Result1'>
            <h2 className='h4-earthquake'> Share With</h2>
           
            <ul className='side-div-p'>
           
                <div className='social-media'>
                    <FaFacebookF/>
                    <FaInstagram/>
                    <VscTwitter/>
                    <FaYoutube/>
                    <FaLinkedin/>
                
                
            </div>
            </ul>
          </div>*/} 
          </div>
        </>
    );
}}
export default Earthquakeinfo;