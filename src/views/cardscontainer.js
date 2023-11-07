import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './cardscontainer.css'

const Cardscontainer = (props) => {
  return (
    <div className="cardscontainer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="cardscontainer-cardscontainer">
        <div className="cardscontainer-cardgetstarted">
          <div className="cardscontainer-frame3">
            <img
              alt="materiallibrary411I331"
              src="/external/materiallibrary411i331-dtjb-200h.png"
              className="cardscontainer-materiallibrary411"
            />
            <span className="cardscontainer-text">
              <span>Augmented Reality</span>
            </span>
            <span className="cardscontainer-text02">
              <span>Place designs in real environments</span>
            </span>
            <div className="cardscontainer-video-tutorials">
              <img
                alt="iconarI331"
                src="/external/iconari331-0yrs.svg"
                className="cardscontainer-iconar"
              />
            </div>
          </div>
        </div>
        <div className="cardscontainer-cardgetstarted1">
          <div className="cardscontainer-frame31">
            <img
              alt="materiallibrary411I335"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6661ee2b-e953-41fe-9e6b-fd7f79960763/6afcd17e-1697-41e9-b39d-c74d26e2e0e8?org_if_sml=129848&amp;force_format=original"
              className="cardscontainer-materiallibrary4111"
            />
            <span className="cardscontainer-text04">
              <span>Augmented Reality</span>
            </span>
            <span className="cardscontainer-text06">
              <span>Place designs in real environments</span>
            </span>
            <div className="cardscontainer-video-tutorials1">
              <img
                alt="iconarI335"
                src="/external/iconari335-9vz.svg"
                className="cardscontainer-iconar1"
              />
            </div>
          </div>
        </div>
        <div className="cardscontainer-cardgetstarted2">
          <div className="cardscontainer-frame32">
            <img
              alt="materiallibrary411I335"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6661ee2b-e953-41fe-9e6b-fd7f79960763/909eaf47-b4a9-494f-badd-c1146fa6c0db?org_if_sml=129848&amp;force_format=original"
              className="cardscontainer-materiallibrary4112"
            />
            <span className="cardscontainer-text08">
              <span>Augmented Reality</span>
            </span>
            <span className="cardscontainer-text10">
              <span>Place designs in real environments</span>
            </span>
            <div className="cardscontainer-video-tutorials2">
              <img
                alt="iconarI335"
                src="/external/iconari335-rxr.svg"
                className="cardscontainer-iconar2"
              />
            </div>
          </div>
        </div>
        <div className="cardscontainer-cardgetstarted3">
          <div className="cardscontainer-frame33">
            <img
              alt="materiallibrary411I335"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6661ee2b-e953-41fe-9e6b-fd7f79960763/81cfe322-403a-4454-8a38-e32ef9547a8f?org_if_sml=129848&amp;force_format=original"
              className="cardscontainer-materiallibrary4113"
            />
            <span className="cardscontainer-text12">
              <span>Augmented Reality</span>
            </span>
            <span className="cardscontainer-text14">
              <span>Place designs in real environments</span>
            </span>
            <div className="cardscontainer-video-tutorials3">
              <img
                alt="iconarI335"
                src="/external/iconari335-d9qc.svg"
                className="cardscontainer-iconar3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cardscontainer-container1">
        <a
          href="https://www.vectary.com/augmented-reality/"
          target="_blank"
          rel="noreferrer noopener"
          className="cardscontainer-link"
        >
          <FeatureCard className="cardscontainer-component"></FeatureCard>
        </a>
      </div>
    </div>
  )
}

export default Cardscontainer
