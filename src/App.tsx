import React from "react"
import "./App.scss"

import Geekboard from "./components/Geekboard"
import Cruncher from "./components/Cruncher"
import Location from "./components/Location"
import TimeMachine from "./components/TimeMachine"

const App: React.FC = () => {
  return (
    <div className="app container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 portfolio__title">
            <p>
              Example <i>*html/scss/js*</i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-10">
            <Geekboard />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-5">
            <Cruncher />
          </div>
          <div className="col-12 col-lg-5">
            <Location />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-5">
            <TimeMachine />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
