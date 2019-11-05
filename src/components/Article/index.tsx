import React from "react"
import avatar from "../../assets/images/monkee _avatar.png"
import avatarRobot from "../../assets/images/robot_avatar.png"
import avatarJakov from "../../assets/images/jakov_avatar.png"
import image from "../../assets/images/coolest_illustartion_ever.png"
import "./styles.scss"

const Article: React.FC = () => {
  return (
    <div className="article">
      <div className="col_left">
        <p className="article__title">Damn article</p>
        <p className="article__subtitle">Bananas</p>
        <p className="article__text">
          Whale is the common name for various marine mammals of the order
          Cetacea. The term whale sometimes refers to all cetaceans, but more
          often it excludes dolphins and porpoises, which belong to the suborder
          Odontoceti.
        </p>
        <div className="article__author">
          <div
            className="article__author__avatar"
            style={{
              backgroundImage: `url('${avatar}')`
            }}
          ></div>
          <p className="article__author__name">Angry Parrot</p>
          <p className="article__author__date">03.06.2019</p>
        </div>
      </div>
      <div
        className="col_right"
        style={{
          backgroundImage: `url('${image}')`
        }}
      >
        <div className="col_right__bottom">
          <span className="uikit-article article__icon"></span>
          <div className="acticle__likes">
            <p className="acticle__likes__title">Likes</p>
            <div
              className="article__author__avatar"
              style={{
                backgroundImage: `url('${avatarJakov}')`
              }}
            ></div>
            <div
              className="article__author__avatar"
              style={{
                backgroundImage: `url('${avatarRobot}')`
              }}
            ></div>
            <div className="article__author__avatar">
              <span>3</span>
            </div>
          </div>
          <div className="article__btn__wrap">
            <button className="article__btn">
              <span>View more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
