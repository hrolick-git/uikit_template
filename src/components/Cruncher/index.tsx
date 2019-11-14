import React, { useState, useEffect, useRef } from "react"
import CanvasJSReact from "../../assets/plugins/canvasjs/canvasjs.react"
const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

const colorSet = ["#f9dc85", "#a6c9ed", "#e295b3"]

CanvasJS.addColorSet("colorSet", colorSet)

const Cruncher: React.FC = () => {
  const initialState = {
    options: chartOptions,
    maxView: 12
  }
  const [option, setOption] = useState(chartOptions)
  const [state, setState] = useState(initialState)
  let chartRef: any = useRef(null)

  return (
    <div className="cruncher">
      <div className="cruncher__top">
        <p className="cruncher__title">Number cruncher</p>
        <span className="uikit-menu"></span>
        <button
          className={
            "cruncher__chart__btn " + (state.maxView === 12 ? "active" : "")
          }
          onClick={() => {
            const result = state.options
            result["axisX"]["viewportMaximum"] = 12
            setState({ options: result, maxView: 12 })
            chartRef.current.render()
          }}
        >
          Day
        </button>
        <button
          className={
            "cruncher__chart__btn " + (state.maxView === 15 ? "active" : "")
          }
          onClick={() => {
            const result = state.options
            result["axisX"]["viewportMaximum"] = 15
            setState({ options: result, maxView: 15 })
            chartRef.current.render()
          }}
        >
          Week
        </button>
        <button
          className={
            "cruncher__chart__btn " + (state.maxView === 30 ? "active" : "")
          }
          onClick={() => {
            const result = state.options
            result["axisX"]["viewportMaximum"] = 30
            setState({ options: result, maxView: 30 })
            chartRef.current.render()
          }}
        >
          Month
        </button>
      </div>
      <div className="cruncher__bottom">
        <div className="row">
          <div className="col-12">
            <div className="cruncher__chart__wrap">
              <CanvasJSChart
                options={state.options}
                onRef={(ref: any) => (chartRef.current = ref)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cruncher

const chartOptions = {
  height: 200,
  width: 520,
  backgroundColor: "transparent",
  axisY: {
    gridThickness: 0,
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: " "
  },
  axisX: {
    gridThickness: 0,
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: " ",
    gridColor: "#d0cfcb",
    viewportMinimum: 1,
    viewportMaximum: 12
  },
  axisX2: {
    gridThickness: 1,
    lineThickness: 0,
    tickThickness: 0,
    gridColor: "#d0cfcb",
    labelFontColor: "#7c7c7c",
    labelFontSize: 14
  },
  animationEnabled: true,
  colorSet: "colorSet",
  data: [
    {
      markerSize: 1,
      type: "splineArea",
      name: "Salaries",
      axisXType: "secondary",
      dataPoints: [
        { x: 1, y: 138 },
        { x: 2, y: 130 },
        { x: 3, y: 50 },
        { x: 4, y: 22 },
        { x: 5, y: 50 },
        { x: 6, y: 10 },
        { x: 7, y: 20 },
        { x: 8, y: 70 },
        { x: 9, y: 80 },
        { x: 10, y: 160 },
        { x: 11, y: 150 },
        { x: 12, y: 60 },
        { x: 13, y: 138 },
        { x: 14, y: 130 },
        { x: 15, y: 50 },
        { x: 16, y: 22 },
        { x: 17, y: 50 },
        { x: 18, y: 10 },
        { x: 19, y: 20 },
        { x: 20, y: 70 },
        { x: 21, y: 80 },
        { x: 22, y: 160 },
        { x: 23, y: 150 },
        { x: 24, y: 60 },
        { x: 25, y: 10 },
        { x: 26, y: 20 },
        { x: 27, y: 70 },
        { x: 28, y: 80 },
        { x: 29, y: 160 },
        { x: 30, y: 150 }
      ]
    },
    {
      markerSize: 1,
      type: "splineArea",
      name: "Office Cost",
      dataPoints: [
        { x: 1, y: 60 },
        { x: 2, y: 61 },
        { x: 3, y: 28 },
        { x: 4, y: 29 },
        { x: 5, y: 115 },
        { x: 6, y: 120 },
        { x: 7, y: 50 },
        { x: 8, y: 52 },
        { x: 9, y: 30 },
        { x: 10, y: 32 },
        { x: 11, y: 144 },
        { x: 12, y: 142 },
        { x: 13, y: 38 },
        { x: 14, y: 20 },
        { x: 15, y: 50 },
        { x: 16, y: 22 },
        { x: 17, y: 50 },
        { x: 18, y: 110 },
        { x: 19, y: 120 },
        { x: 20, y: 170 },
        { x: 21, y: 80 },
        { x: 22, y: 160 },
        { x: 23, y: 150 },
        { x: 24, y: 60 },
        { x: 25, y: 10 },
        { x: 26, y: 20 },
        { x: 27, y: 70 },
        { x: 28, y: 80 },
        { x: 29, y: 160 },
        { x: 30, y: 150 }
      ]
    },
    {
      markerSize: 1,
      type: "splineArea",
      name: "Entertainment",
      dataPoints: [
        { x: 1, y: 18 },
        { x: 2, y: 20 },
        { x: 3, y: 60 },
        { x: 4, y: 61 },
        { x: 5, y: 18 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 34 },
        { x: 9, y: 33 },
        { x: 10, y: 8 },
        { x: 11, y: 7 },
        { x: 12, y: 6 },
        { x: 13, y: 138 },
        { x: 14, y: 130 },
        { x: 15, y: 50 },
        { x: 16, y: 22 },
        { x: 17, y: 50 },
        { x: 18, y: 150 },
        { x: 19, y: 120 },
        { x: 20, y: 70 },
        { x: 21, y: 80 },
        { x: 22, y: 50 },
        { x: 23, y: 50 },
        { x: 24, y: 60 },
        { x: 25, y: 10 },
        { x: 26, y: 20 },
        { x: 27, y: 70 },
        { x: 28, y: 80 },
        { x: 29, y: 160 },
        { x: 30, y: 150 }
      ]
    }
  ]
}
