import React from "react"
import avatar from "../../assets/images/monkee _avatar.png"

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
        <div className="location__center__text__wrap">
          <span className="uikit-mark icon"></span>
          <p className="location__center__text">First check in</p>
        </div>
        <div className="location__center__btn">
          <span className="uikit-article icon"></span>
        </div>
        <div className="location__center__btn">
          <span className="uikit-croissant icon"></span>
        </div>
      </div>
      <div className="location__bottom">
        <div
          className="location__bottom__avatar"
          style={{
            backgroundImage: `url('${avatar}')`
          }}
        ></div>
        <p className="location__bottom__text">Monkee Bananas</p>
        <p className="location__bottom__time">3m ago</p>
      </div>
    </div>
  )
}

export default Location
