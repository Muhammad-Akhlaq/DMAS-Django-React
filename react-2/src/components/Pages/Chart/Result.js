import React from 'react';
 import ReactDOM from 'react-dom';
 import Chart from 'chart.js';
 
 import csv from 'd3';
class Result extends React.Component {
  chart = null;

  componentDidMount() {
    this.configureChart(this.props);
  }

  configureChart = () => {
    const chartCanvas = ReactDOM.findDOMNode(this.chart);

    const mixedChart = new Chart(chartCanvas, {
        type: "horizontalBar",
      data: {
        datasets: [
        
          {
            label: "Deaths",
            data: [this.props.Val],
            pointHoverRadius: [5],
            
            backgroundColor:'brown',
            fill: "empty",
            // pointRadius: 0,
            pointStyle: "circle",
           
          }
        ],
        labels: [
          "Jan"
          
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0.178901
          }
        },
        tooltips: {
          displayColors: false
        },
        legend: {
          display: true,
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              display: true,
              // stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              display: true,
              stacked: true,
              barThickness: 25,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };
 
  render() {
    return (
      <div>
         
        <canvas
        height={100}
        width={800}
          ref={chart => {
            this.chart = chart;
          }}
        />
      </div>
    );
  }
}


export default Result;