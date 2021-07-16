import React from "react";
import ReactDOM from "react-dom";
import '../Earthqauke/DeathResult.css';
import { defaults } from "react-chartjs-2";
import Chart from "chart.js";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
defaults.global.tooltips.enabled = true;
class Blog extends React.Component {
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
            label: "Estimated Deaths and Displaced",
            data: [data.Deaths.value, data.Displaceds.value],

            backgroundColor: ["#DE924B","skyblue"],
            borderColor: "#DE924B",
            borderWidth: 1,
          },
        ],
        labels: ["Deaths", "Displaced"],
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
          <div>
            <h1> Estimated Result due to Flood</h1>
            <div className="main-card-result">
              <div className="card-result1">
                <h2 className="result-heading">Death</h2>
                <h3>
                  Estimation :{" "}
                  {this.props.location.state.data.Deaths.Estimation}
                </h3>

                <p className="paragraph-result">
                  {" "}
                  System Estimate That{" "}
                  {this.props.location.state.data.Deaths.range} People Died
                  Due to Flood.
                </p>
              </div>
              <div className="card-result2">
                <h2 className="result-heading">Displaced</h2>

                <h3>
                  Estimation :{" "}
                  {this.props.location.state.data.Displaceds.Estimation}
                </h3>
                <p className="paragraph-result">
                  {" "}
                  System Estimate That{" "}
                  {this.props.location.state.data.Displaceds.range} People Get
                  Affected Due to Flood.
                </p>
              </div>
            </div>
<div className="Bar-graph">
            <canvas
              
              height={200}
              width={600}
              ref={(chart) => {
                this.chart = chart;
              }}
            />
            </div>
          </div>
          <div>
          <div className="Mapadj">
              <Map
              style={{margin:' 2% 20%',height:'70%'}}
               
                google={this.props.google}
                zoom/*fit*/={2}
                center={{
                  lat: this.props.location.state.data.Location.Lat,
                  lng: this.props.location.state.data.Location.Long,
                }}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  position={{
                    lat: this.props.location.state.data.Location.Lat,
                    lng: this.props.location.state.data.Location.Long,
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
})(Blog);
