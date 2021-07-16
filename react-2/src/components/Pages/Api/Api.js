import React, { useState } from 'react';
import  { useEffect} from 'react';
import {ScaleLoader} from 'react-spinners';
import {  getWeatherData} from './Fetchapi';
import './Api.css';

const Api = () => {
    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
  
    const getData = async () => {
      try{
          setLoading(true);
          const data = await getWeatherData(city);
          setWeatherData(data);
          setLoading(false);
          console.log(data);
      }catch(error) {
        console.log(error.message);
        setLoading(false);
      }
    }
    const override = `
    display: block;
    margin: 0 auto;
    border-color: green;
    `;
    useEffect(() => {
      getData();
    }, []);
    return (
      <div className="App">
        <div className="card">
          <h2 className="title"><i className="fa fa-cloud"></i>Explore the Weather Information </h2>
          <div className="search-form">
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
           
            <button type="submit" onClick={() => getData()}> Search</button>
          </div>
          {loading ? (
            <div className="loader-container">
              <ScaleLoader
                css={override}
                size={200}
                color= {"#fff"}
                loading= {loading}
                />
            </div>
          ) : (
            <>
            {weatherdata !== null ? (
            <div className="main-container">
              <h4>Live Weather Condition</h4>
              
              <div className="weather-icon">
                <img src={weatherdata.icon} alt="imgicon"/>
              </div>
              <div className="temprature">
                <h1>{weatherdata.temp}</h1>
              </div>
              <div className="location">
                <h3><i className="fa fa-street-view"></i>{weatherdata.condition} | {weatherdata.location}</h3>
              </div>
              
              <div className="temprature-range">
                <h3> Alert: {weatherdata.alert}</h3>
              </div>
              <div className="temprature-range">
                <h5> Humidity: {weatherdata.humidity}%</h5>
              </div>
          </div>
          ) : null}
            </>
          ) }       
        </div>
      </div>
    );
  }

export default Api;