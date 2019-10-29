import React from "react"
import "./App.scss"

import Geekboard from "./components/Geekboard"

const App: React.FC = () => {
  return (
    <div className="app container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            <Geekboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
