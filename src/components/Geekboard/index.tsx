import React, { useState, useEffect } from "react"
import CanvasJSReact from "../../assets/plugins/canvasjs/canvasjs.react"
const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart

CanvasJS.addColorSet("one", ["#e295b3", "#a6c9ed"])
CanvasJS.addColorSet("two", ["#a1decb", "#f9dc85"])

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
  height: 200,
  width: 167,
  backgroundColor: "transparent",
  interactivityEnabled: false,
  colorSet: "one",
  data: [
    {
      type: "doughnut",
      indexLabel: "{null}",
      startAngle: -90,
      innerRadius: 50,
      showInLegend: false,
      dataPoints: [{ label: "Today", y: 60 }, { label: "Max", y: 40 }]
    }
  ]
}

const chartTwoOptions = {
  height: 200,
  width: 167,
  backgroundColor: "transparent",
  interactivityEnabled: false,
  colorSet: "two",
  data: [
    {
      type: "doughnut",
      indexLabel: "{null}",
      startAngle: -90,
      innerRadius: 50,
      showInLegend: false,
      dataPoints: [{ label: "Today", y: 60 }, { label: "Max", y: 40 }]
    }
  ]
}

const Geekboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(Tabs[0])
  useEffect(() => {}, [])

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
            <div className="col-12 col-lg-6 canvas__chart">
              <div className="canvas-wrap">
                <span className="uikit-shit icon"></span>
                <CanvasJSChart options={chartOneOptions} />
              </div>
            </div>
            <div className="col-12 col-lg-6 canvas__chart">
              <div className="canvas-wrap">
                <span className="uikit-toilet-paper icon2"></span>
                <CanvasJSChart options={chartTwoOptions} />
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
      </div>
    </div>
  )
}

export default Geekboard
