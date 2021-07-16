import React from "react";
import Cards from "../../Card/Cards";
import "./Live.css";
import CardItem from "../../Card/CardItems";
const Live = () => {
  return (
    <div>
     
      <div className="cards">
      <h1>Explore The Live Information About Disaster!</h1>
    
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              path="/Earthquakeinfo"
              src="images/news.jpg"
              text="Explore the All News Information..."
              label="All News"
              target="_blank"
              
              path="/MyNews"
            />
            <CardItem
              src="images/quake.jpg"
              text="Explore the Earthqake Live Information..."
              path="/EarthquakeLive"
              label="EarthquakeLive"
              
              target="_blank"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images\flood12.jpg"
              text="Explore the Flood Live Information..."
              label="Flood"
              path="/FloodLive"
              target="_blank"
            />
            <CardItem
              src="images/covid.jpg"
              text="Explore the COVID-19 Information..."
              label="COVID-19"
              path="/CovidLive"
              target="_blank"
            />
          
          </ul>
        </div>
      </div>
    </div>

    
    </div>
  );
};

export default Live;
