import React from "react"

const Location: React.FC = () => {
  return (
    <div className="location mt-4 mt-lg-0">
      <div className="location__top">
        <div className="location__map">
          <p className="location__title">Paris, France</p>
          <span className="uikit-location float-icon"></span>
        </div>
      </div>
      <div className="location__center">
        <p className="location__center__text">
          <span className="uikit-mark icon"></span>First check in
        </p>
        <div className="location__center__btn">
          <span className="uikit-article icon"></span>
        </div>
        <div className="location__center__btn">
          <span className="uikit-croissant icon"></span>
        </div>
      </div>
      <div className="location__bottom">
        <p className="location__bottom__text">Monkee Bananas</p>
      </div>
    </div>
  )
}

export default Location
