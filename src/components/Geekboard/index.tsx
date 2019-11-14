import React, { useState, useEffect, useRef } from "react"
import CanvasJSReact from "../../assets/plugins/canvasjs/canvasjs.react"
const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

const oneColorSet = ["#e295b3", "#a6c9ed"]
const twoColorSet = ["#a1decb", "#f9dc85"]

CanvasJS.addColorSet("one", oneColorSet)
CanvasJS.addColorSet("two", twoColorSet)

const Tabs = [
  {
    icon: "flash"
  },
  {
    icon: "article"
  },
  {
    icon: "map"
  },
  {
    icon: "setting"
  }
]

const chartOneOptions = {
  height: 160,
  width: 167,
  backgroundColor: "transparent",
  // interactivityEnabled: false,
  colorSet: "one",
  animationEnabled: true,
  data: [
    {
      type: "doughnut",
      indexLabel: "{null}",
      startAngle: -90,
      innerRadius: 50,
      showInLegend: false,
      dataPoints: [
        { label: "Today", y: 60 },
        { label: "Max", y: 40 }
      ]
    }
  ]
}

const chartTwoOptions = {
  height: 160,
  width: 167,
  backgroundColor: "transparent",
  colorSet: "two",
  animationEnabled: true,
  data: [
    {
      type: "doughnut",
      indexLabel: "{null}",
      startAngle: -90,
      innerRadius: 50,
      showInLegend: false,
      dataPoints: [
        { label: "Today", y: 60 },
        { label: "Max", y: 40 }
      ]
    }
  ]
}

const chartThreeOptions = {
  height: 160,
  backgroundColor: "transparent",
  animationEnabled: true,
  axisY: {
    gridThickness: 0,
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: " " //space
  },
  axisX: {
    gridThickness: 0,
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: " " //space
  },
  data: [
    {
      type: "column",
      color: "#a6c9ed",
      dataPoints: [
        { y: 50 },
        { y: 40 },
        { y: 30 },
        { y: 80 },
        { y: 20 },
        { y: 15 },
        { y: 60 },
        { y: 75 },
        { y: 35 },
        { y: 50 },
        { y: 40 },
        { y: 30 },
        { y: 55 }
      ]
    }
  ]
}

const randomData = () => {}

interface dataPoints {
  y: number
}

const Geekboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Tabs[0])
  const [dataChart, setDataChart] = useState(chartThreeOptions)
  let chartRef: any = useRef(null)

  useEffect(() => {
    setInterval(() => {
      const newDataPoints: Array<any> = []
      const newDataChart = dataChart
      const dataPoints = chartThreeOptions.data[0].dataPoints
      for (let i = 0; i < dataPoints.length; i++) {
        newDataPoints.push({ y: Math.floor(Math.random() * 100 + 1) })
      }
      newDataChart.data[0].dataPoints = newDataPoints
      setDataChart(newDataChart)
      chartRef.current.render()
    }, 5000)
  }, [])

  return (
    <div className="geekboard">
      <div className="geekboard__tabs">
        <div className="geekboard__tabs__btn">
          {Tabs.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => setActiveTab(item)}
                className={`tabs__btn__item ${
                  item === activeTab ? "active" : ""
                }`}
              >
                <span className={`uikit-${item.icon}`}></span>
              </div>
            )
          })}
        </div>
        <div className="geekboard__tabs__content">
          <span className="uikit-menu"></span>
          <p className="tab__cont__title">Geekboard</p>
          <div className="row">
            <div className="col-12 col-lg-4 canvas__chart">
              <div className="canvas-wrap">
                <span className="uikit-shit icon"></span>
                <CanvasJSChart options={chartOneOptions} />
              </div>
              <div className="chart__datapoints">
                {chartOneOptions.data[0].dataPoints.map((item, i) => {
                  return (
                    <div className="chart__datapoints__item" key={i}>
                      <span
                        className="color"
                        style={{ background: oneColorSet[i] }}
                      ></span>
                      <span className="text" style={{ color: oneColorSet[i] }}>
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-12 col-lg-4 canvas__chart">
              <div className="canvas-wrap">
                <span className="uikit-toilet-paper icon2"></span>
                <CanvasJSChart options={chartTwoOptions} />
              </div>
              <div className="chart__datapoints">
                {chartTwoOptions.data[0].dataPoints.map((item, i) => {
                  return (
                    <div className="chart__datapoints__item" key={i}>
                      <span
                        className="color"
                        style={{ background: twoColorSet[i] }}
                      ></span>
                      <span className="text" style={{ color: twoColorSet[i] }}>
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="canvas__chart__details">
              <div className="details__block">
                <p className="details__block__num">523</p>
                <p className="details__block__about">Deploys today</p>
              </div>
              <div className="details__block">
                <p className="details__block__num">213</p>
                <p className="details__block__about">TP rolls spent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="geekboard__daily-load">
        <div className="row">
          <div className="col-8">
            <p className="daily-load__title">Daily load</p>
          </div>
          <div className="col-4">
            <p className="daily-load__percent">67%</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span className="uikit-user daily-load__icon"></span>
            <p className="daily-load__num">751</p>
            <p className="daily-load__about">users</p>
          </div>
          <div className="col-12">
            <div className="chart_three__wrap">
              <CanvasJSChart
                options={dataChart}
                onRef={(ref: any) => (chartRef.current = ref)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Geekboard
