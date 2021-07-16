import React,{Component,useRef} from "react";
import "./Earthquakeinfo.css";

import downimage from "../../images/Locustmain.jpg";
import grasshoper from "../../images/grashopper.jpg";
import getrid from "../../images/getrid.jpg";
import threat from "../../images/threat.jpg";
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

const Locust = () => {
 
  return (
    <>
    
    <div >
      <div >
      
        <h1 style={{margin:'20px'}}>About Locusts</h1>
        <p className="paragraph">
          Locusts are large herbivorous insects that can be serious pests of
          agriculture due to their ability to form dense and highly mobile
          swarms. They are species of short-horned grasshoppers that
          periodically form large populations in dense migrating groups, where
          individuals differ in several characteristics from those living
          separately.{" "}
        </p>
        <img src={downimage} className="img"></img>
        <ul className="paragraph">
          <li>In Australia there are three main pest species of locust</li>

          <li>the Australian plague locust (Chortoicetes terminifera)</li>
          <li>the spur-throated locust (Austracris guttulosa)</li>
          <li>the migratory locust (Locusta migratoria)</li>

          <li>
            All three species are native to Australia. Locusts belong to the
            same order of insects as grasshoppers, katydids and crickets - the
            Orthoptera.
          </li>
        </ul>

        <h2 className="title-4">
          What is the difference between Locust and grasshoppers
        </h2>
        
        <ul className="paragraph">
          <p>
            Locusts and grasshoppers are the same in appearance, but locusts can
            exist in two different behavioural states (solitary and gregarious),
            whereas most grasshoppers do not. When the population density is
            low, locusts behave as individuals, much like grasshoppers. However,
            when locust population density is high, individuals undergo
            physiological and behavioural changes, known as phase polyphenism,
            and they form gregariously behaving bands of nymphs or swarms of
            adults.
          </p>
          <p>
            The distinction between locusts and grasshoppers is often not
            clear-cut, as the extent to which different species exhibit
            gregarious phase characters is graded. The migratory locust has all
            of the features associated with phase change - differences in body
            shape and colour, fertility and gregarious behaviour in both the
            nymph and adult life stages, forming dense bands and swarms. The
            Australian plague locust also forms dense nymph bands and adult
            swarms, but does not exhibit changes in body colour. Spur-throated
            locust nymphs do not form bands and the adults do not lay eggs
            gregariously, but they do form dense swarms.
          </p>
          <p>
            Some species that are called grasshoppers, such as Austroicetes
            cruciata, Oedaleus australis and Peakesia spp. can form loose swarms
            at high densities, but do not generally migrate long distances as
            locusts do.
          </p>
        </ul>
        <h3  className="title-4" >
          How to protect kitchen gardens from locusts/Grasshoper
        </h3>

        <ul className="paragraph">
          <li>You can make a garlic-chilli spray at home.</li>
          <li>Spray some neem oil on the plants.</li>
          <li>
            Create some smoke around the garden area by burning wood or lighting
            incense sticks to neutralise the swarm.
          </li>
          <li>Make noise to keep the insects away.</li>
        </ul>
        <img src={getrid} className="img"></img>

        <h3 className="title-4">Where is the current Locust outbreak? </h3>
        <ul className="paragraph">
          <p>
            Swarms of desert locusts are threatening large areas of pastures and
            crops, overwhelming countries in the Horn of Africa, the Middle
            East, and South Asia. The UN Food and Agriculture Organization (FAO)
            says these swarms represent the worst infestation in 25 years in
            Ethiopia and Somalia, in 26 years in India, and the worst in 70
            years in Kenya. The crisis has affected 23 countries to date, from
            Pakistan to Tanzania. This is a single global outbreak, and if it
            reaches plague levels, it could cover 20 percent of the earth’s land
            mass.
          </p>
        </ul>

        <h2 className="title-4">
          Why is this outbreak so serious and could it get worse?
        </h2>
        <p className="paragraph">
          In the wider East Africa region, the above average rainy season in
          March and April created favorable conditions for locusts to breed –
          increasing their number and the areas they could spread to. If left
          unchecked, the number of desert locusts could grow by 400 times by
          June, as each generation has a 20-fold increase in population on
          average. Within the region, 24 million people are food insecure and 8
          million are internally displaced. The locusts further threaten their
          food security and their ability to access pasture for livestock. These
          impacts on the food cycle could drastically threaten livelihoods,
          erode people’s savings, and push people further into poverty. The cost
          of response during the last major locust outbreak in 2003-05 in West
          Africa, grew from $1 million in June 2003 to $100 million just 14
          months later. Ultimately, it cost over $450 million to end the
          2003-2005 plague, which caused an estimated $2.5 billion in crop
          damage.
        </p>
        <h3 className="title-4">
          What countries are currently affected by this
        </h3>
        <img src={threat} className="img"></img>
        <ul className="paragraph">
          <li>
            The outbreak is evolving quickly. As of mid-April 2020, 23 countries
            have been affected: 9 in the wider East Africa region, 11 in North
            Africa & the Middle East, and 3 in South Asia.
          </li>
          <li>
            A recent joint impact assessment report by the Government of
            Ethiopia and FAO estimates that the desert locust outbreak in
            Ethiopia alone has caused 356,286 metric tons of cereal loss
          </li>
          <li>
            along with destruction of 197,163 ha of cropland and 1,350,000 ha of
            pasturelands, with more than 1 million Ethiopians in need of food
            assistance as result.
          </li>
          <li>
            There are two types of face masks, fabric masks (which you can make
            yourself and are suitable for most people) and medical masks.
          </li>
          <li>
            As medical masks are in short supply, they should only be worn by
            healthcare workers, people with COVID-19 symptoms and those caring
            for people with suspected or confirmed cases of COVID-19. When it’s
            not possible to maintain a distance of one meter from others, people
            over 60 and those with underlying health conditions should also wear
            medical masks.
          </li>
        </ul>
        <br />
        
     
            </div></div>
            
    </>
  );
};

export default Locust;
