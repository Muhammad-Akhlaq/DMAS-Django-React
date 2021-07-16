import React,{Component} from 'react';
import styles from './CovidLive.module.css';

import image from '../../../../images/image.jpg';
import {fetchData} from './CovidApi/Index';
import Cards from './Card/Card';
import Chart from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
class CovidLive extends React.Component {
    state = {
        data: {},
        country: '',
      }
    async componentDidMount(){
        const data=await fetchData();
        this.setState({ data });
  }
        
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
    render(){
        const { data, country } = this.state;
    return (
        <div className={styles.container}>
            <img className={styles.image}src={image} alt='Covid-19'/>
            <h3>Check-Out These Covid-19 Live Information!</h3>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    )
}}

export default CovidLive
