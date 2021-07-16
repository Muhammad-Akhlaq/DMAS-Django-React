import React from "react";
import "./Cards.css";
import CardItem from "../../components/Card/CardItems";
import Earthquakeinfo from "../../components/Pages/Infopages/Earthquakeinfo";
import Awareness from "../../components/Pages/Awareness";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these DIsaster Awareness!</h1>
      {/*     <p className='diasaster-prepared'>During Disaster it is important to have an proper Awareness about Disaster .Disaster preparedness has the potential save the maximum number of lives and 
        property during a disaster, and it aims to return the affected populations
         to normalcy as quickly as possible.Visit the pages and gather Awareness.</p>*/}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              path="/Earthquakeinfo"
              src="images/img-11.jpg"
              text="Explore the Earthquake Information..."
              label="Earthquake"
              target="_blank"
              
              path="/Earthquakeinfo"
            />
            <CardItem
              src="images/flood2.jpg"
              text="Explore the Flood Information..."
              path="/Floodinfo"
              label="Flood"
              path="/Floodinfo"
              target="_blank"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images\fire1.jpg"
              text="Explore the Fire Information..."
              label="Fire"
              path="/Fireinfo"
              target="_blank"
            />
            <CardItem
              src="images/covid.jpg"
              text="Explore the COVID-19 Information..."
              label="COVID-19"
              path="/Covid19"
              target="_blank"
            />
            <CardItem
              src="images/locust2.jpg"
              text="Explore the Locusts Information..."
              label="Locusts"
              path="/Locust"
              target="_blank"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
