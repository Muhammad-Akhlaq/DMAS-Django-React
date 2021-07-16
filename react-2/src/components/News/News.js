
import React, { usestate } from "react";
import {BeatLoader} from 'react-spinners';
import Readmore from '../News/Readmore';

import Pagination from "./Pagination";
import {Modal} from '@material-ui/core'
import "./News.css";

let p=0;


export default class News extends React.Component {
  state = {
    users: null,
    loading: true,
  
    
    
  }


  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  }


  makeHttpRequestWithPage = async pageNumber => {
    const response = await fetch(`http://127.0.0.1:8000/news/${p+pageNumber}`);
    p=p+pageNumber;

    const data = await response.json();
console.log(data);
    this.setState({
      users: data.News,loading: false 
      
    });
    //this.Readmore=this.Readmore.bind(this);
  }
/*Readmore=()=>{
  this.setState((old)=>{
    return{visible: old.visible+ 5000}
  })
}*/
  render() {
   
    if (!this.state.users) {
      return <div className="loading">Loading
     <BeatLoader/>
     </div>
    }
   
    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (
        <div className="Main-News-Container">
        <div className="site-content-news">
        
          <div
            className="post-content-news"
           
          >
            <div className="post-image-news">
              <div></div>
              <div className="post-info ">
                <span>
                  <i className="fas fa-map-marker-alt text-gray" />
                  &nbsp;&nbsp;
                  {user.country}
                  &nbsp;&nbsp;
                </span>
                <span >
                  <i className="fas fa-calendar-alt text-gray" />
                  &nbsp;&nbsp;
                  {user.date}
                  &nbsp;&nbsp;
                </span>
                <span>
                Status: &nbsp;&nbsp;{user.status}&nbsp;&nbsp;
                </span>
                <span>
                Type: &nbsp;&nbsp;{user.types}
                </span> 
              </div>
            </div>
            <div className="post-title-news">
              <a href="">
             HEADLINE: {user.headline}
              </a> 
             
<Readmore
val={user.description} >

</Readmore>
             
            
            </div>
          </div>
        
      </div>
      </div>
      ));
    }


    return (


    <div>
       <h1>Explore!Latest Disaster News</h1>
        <p className="news-paragraph">
          Here You can read about latest disasters occured aroung the world
        </p>
            {users}
         
            <div className="pagination-News">

        <section className="pagination flex-row">
            <a href="#" onClick={() => this.makeHttpRequestWithPage(-1)}>
              <i className="fas fa-chevron-left" />
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(p)} className="pages">
              {p}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(1)} className="pages">
            {p+1}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(2)} className="pages">
            {p+2}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(1)}>
              <i className="fas fa-chevron-right" />
            </a>
            
          </section></div>
      </div>
    );
  }}
