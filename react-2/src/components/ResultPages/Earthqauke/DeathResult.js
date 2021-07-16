import React from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";
import "./DeathResult.css";
import CardComponent from "../../Pages/Extrapages/LiveEvents/CovidlLive/Card/CardComponent";
//import CardItem from '../../Card/CardItems';
import { defaults } from "react-chartjs-2";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Typography, Grid } from "@material-ui/core";
defaults.global.tooltips.enabled = true;
class DeathResult extends React.Component {
  state = {
    users: null,
  };

  chart = null;

  async componentDidMount() {
    console.log(this.props.location.state.data);
    this.setState({ users: this.props.location.state.data });
    this.configureChart(this.props.location.state.data);
  }

  configureChart = async (data) => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Estimated Result ",
            data: [
              data.Deaths.value,
              data.Injureds.value,
              data.Affecteds.value,
            ],

            backgroundColor: ["#DE924B", "seagreen", "skyblue"],
            borderColor: "#DE924B",
            borderWidth: 1,
          },
        ],
        labels: ["Deaths", "Injured", "Affected"],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  // in render

  render() {
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>;

    return (
      <>
        <div className="result-body">
          <h1> Estimated Result Due To Earthqauke</h1>
          {/*  <div className="user-data">
           <div className="user-text">
            <h3>Latitude</h3>{this.props.location.state.data.credential.lat} 
            <h3>Longitude</h3>{this.props.location.state.data.credential.long}
            <h3>Magnitude</h3>{this.props.location.state.data.credential.magnitude}</div>
            </div> */}

          <div className="main-card-result">
            <div className="card-result1">
              <h2 className="result-heading">Death</h2>
              <h3>
                Estimation : {this.props.location.state.data.Deaths.Estimation}
              </h3>

              <p className="paragraph-result">
                {" "}
                System Estimate That{" "}
                {this.props.location.state.data.Deaths.range} People Died Due to
                Earthquake.
              </p>
            </div>
           
            <div className="card-result3">
              <h2 className="result-heading">Injured</h2>
              <h3>
                Estimation :{" "}
                {this.props.location.state.data.Injureds.Estimation}
              </h3>

              <p className="paragraph-result">
                {" "}
                System Estimate That{" "}
                {this.props.location.state.data.Injureds.range} People Injured
                Due to Earthquake.
              </p>
            </div>
            <div className="card-result2">
              <h2 className="result-heading">Affected</h2>

              <h3>
                Estimation :{" "}
                {this.props.location.state.data.Affecteds.Estimation}
              </h3>
              <p className="paragraph-result">
                {" "}
                System Estimate That{" "}
                {this.props.location.state.data.Affecteds.range} People Affected
                Due to Earthquake.
              </p>
            </div>
          </div>

          <div className="Bar-graph">
            <canvas
              style={{ width: "1000", height: "600" }}
              ref={(chart) => {
                this.chart = chart;
              }}
            />
          </div>

          <div>
            <div className="Mapadj">
              <Map style={{margin:' 2% 18%',height:'70%'}}
                google={this.props.google}
                zoom={2}
                center={{
                  lat: this.props.location.state.data.location.Lat,
                  lng: this.props.location.state.data.location.Long,
                }}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  position={{
                    lat: this.props.location.state.data.location.Lat,
                    lng: this.props.location.state.data.location.Long,
                  }}
                />
              </Map>
            </div>
          </div>
          <footer style={{textAlign:'center',marginBottom:'5px'}}>This information is not Authenticated by any Official source</footer>

        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBdnBgsXjTaRSv3_d5MOBpeCOuBghDWZK4",
})(DeathResult);
