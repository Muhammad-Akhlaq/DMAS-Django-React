import React from "react";
import { BeatLoader } from "react-spinners";
import Readmore from "../../../../News/Readmore";
import "./FloodLive.css";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

let p = 0;

class FloodLive extends React.Component {
  state = {
    users: null,
    loading: true,
  };

  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  }

  makeHttpRequestWithPage = async (pageNumber) => {
    const response = await fetch(
      `http://127.0.0.1:8000/floodLive/${p + pageNumber}`
    );
    p = p + pageNumber;

    const data = await response.json();
    console.log(data);
    this.setState({
      users: data.News,
      loading: false,
    });
    //this.Readmore=this.Readmore.bind(this);
  };

  render() {
    if (!this.state.users) {
      return (
        <div className="loading">
          Loading
          <BeatLoader />
        </div>
      );
    }

    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map((user) => (
        <div className="Main-News-Container">
        <div className="site-content-news">
          <div className="posts">
            <div
              className="post-content-news"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="post-image-news">
                <div></div>
                <div className="post-info flex-row">
                  <span>
                    <i className="fas fa-map-marker-alt text-gray" />
                    &nbsp;&nbsp;
                    {user.date}
                  </span>
                  <span>
                  &nbsp;&nbsp;<i className="fas fa-calendar-alt text-gray" />
                    &nbsp;&nbsp; {user.country}&nbsp;&nbsp;
                  </span>
                  <span>Status: &nbsp;&nbsp;{user.status}</span>
                  <span>Type: &nbsp;&nbsp;{user.type}</span>
                </div>
              </div>
              <div className="post-title-news">
                <a href="">HEADLINE: {user.headline}</a>
                <Readmore val={user.description}></Readmore>
              </div>
            </div>
          </div>
        </div>
        </div>
      ));
    }

    return (
      <>
        <div>
          <h1>Flood Live News with Mapping</h1>
          <p className="news-paragraph">
            Here You can read about latest flood occured around the world
          </p>
          <section className="floodmap">


            <Map  google={this.props.google} zoom={1} style={{margin:' 2% 11%',height:"70%"}}>

              {this.state.users.map((user) => (
                <Marker position={{ lat: user.lat, lng: user.long }} />
              ))}

              <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
            </Map>
          </section>
         
          {users}

          <div className="pagination-News">
            <section className="pagination flex-row">
              <a href="#" onClick={() => this.makeHttpRequestWithPage(-1)}>
                <i className="fas fa-chevron-left" />
              </a>
              <a
                href="#"
                onClick={() => this.makeHttpRequestWithPage(p)}
                className="pages"
              >
                {p}
              </a>
              <a
                href="#"
                onClick={() => this.makeHttpRequestWithPage(1)}
                className="pages"
              >
                {p + 1}
              </a>
              <a
                href="#"
                onClick={() => this.makeHttpRequestWithPage(2)}
                className="pages"
              >
                {p + 2}
              </a>
              <a href="#" onClick={() => this.makeHttpRequestWithPage(1)}>
                <i className="fas fa-chevron-right" />
              </a>
            </section>
          </div>
        </div>
        
        
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4",
})(FloodLive);
