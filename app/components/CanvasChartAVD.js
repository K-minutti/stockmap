import axios from "axios";
import React, { Component } from "react";
import CanvasJSReact from "./other/canvasjs.stock.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class CanvasChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints1: [],
      dataPoints2: [],
      dataPoints3: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    Reference: //reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
    https: fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
      .then((res) => res.json())
      .then((data) => {
        let dps1 = [],
          dps2 = [],
          dps3 = [];
        for (let i = 0; i < data.length; i++) {
          dps1.push({
            x: new Date(data[i].date),
            y: [
              Number(data[i].open),
              Number(data[i].high),
              Number(data[i].low),
              Number(data[i].close),
            ],
            color: data[i].open < data[i].close ? "green" : "red",
          });
          dps2.push({
            x: new Date(data[i].date),
            y: Number(data[i].volume_usd),
            color: data[i].open < data[i].close ? "green" : "red",
          });
          dps3.push({ x: new Date(data[i].date), y: Number(data[i].close) });
        }

        this.setState({
          isLoaded: true,
          dataPoints1: dps1,
          dataPoints2: dps2,
          dataPoints3: dps3,
        });
      });
  }

  render() {
    const options = {
      theme: "light2",
      // backgroundColor: "#6a5acd",
      title: {
        text: "React StockChart with Date-Time Axis",
      },
      subtitles: [
        {
          text: "Price-Volume Trend",
        },
      ],
      charts: [
        {
          axisX: {
            lineThickness: 5,
            tickLength: 0,
            labelFormatter: function (e) {
              return "";
            },
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              labelFormatter: function (e) {
                return "";
              },
            },
          },
          axisY: {
            title: "Litecoin Price",
            prefix: "$",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Price (in USD)",
              yValueFormatString: "$#,###.##",
              type: "candlestick",
              risingColor: "green",
              fallingColor: "red",
              dataPoints: this.state.dataPoints1,
            },
          ],
        },
        {
          height: 100,
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
            },
          },
          axisY: {
            title: "Volume",
            prefix: "$",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Volume",
              yValueFormatString: "$#,###.##",
              type: "column",
              dataPoints: this.state.dataPoints2,
            },
          ],
        },
      ],
      navigator: {
        data: [
          {
            color: "grey",
            dataPoints: this.state.dataPoints3,
          },
        ],
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-07-01"),
        },
      },
    };
    const containerProps = {
      width: "100%",
      height: "850px",
      margin: "auto",
    };
    return (
      <div>
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            this.state.isLoaded && (
              <CanvasJSStockChart
                containerProps={containerProps}
                options={options}
                /* onRef = {ref => this.chart = ref} */
              />
            )
          }
        </div>
      </div>
    );
  }
}
export default CanvasChart;
