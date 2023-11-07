import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './cardgetstarted.css'

const Cardgetstarted = (props) => {
  return (
    <div className="cardgetstarted-cardgetstarted">
      <img
        alt={props.materiallibrary411_alt}
        src={props.materiallibrary411_src}
        className="cardgetstarted-materiallibrary411"
      />
      <div className="cardgetstarted-container">
        <span className="cardgetstarted-text">
          <span>Augmented Reality</span>
        </span>
        <span className="cardgetstarted-text2">
          <span>Place designs in real environments</span>
        </span>
      </div>
      <Player
        src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
        autoplay
        speed="1"
        background="transparent"
        loop
        className="cardgetstarted-lottie-node"
      ></Player>
      <div className="cardgetstarted-video-tutorials">
        <img
          alt={props.iconar_alt}
          src={props.iconar_src}
          className="cardgetstarted-iconar"
        />
      </div>
    </div>
  )
}

Cardgetstarted.defaultProps = {
  iconar_alt: 'iconarI331',
  iconar_src: '/external/iconari331-0yrs.svg',
  materiallibrary411_src: '/external/materiallibrary411i331-dtjb-400w.png',
  materiallibrary411_alt: 'materiallibrary411I331',
}

Cardgetstarted.propTypes = {
  iconar_alt: PropTypes.string,
  iconar_src: PropTypes.string,
  materiallibrary411_src: PropTypes.string,
  materiallibrary411_alt: PropTypes.string,
}

export default Cardgetstarted
