import React from 'react'

import { Helmet } from 'react-helmet'

import Cardgetstarted from '../components/cardgetstarted'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - exported project</title>
        <meta property="og:title" content="Page - exported project" />
      </Helmet>
      <div className="page-cardscontainer">
        <Cardgetstarted></Cardgetstarted>
        <Cardgetstarted></Cardgetstarted>
        <Cardgetstarted></Cardgetstarted>
        <Cardgetstarted></Cardgetstarted>
      </div>
    </div>
  )
}

export default Page
