import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <Navbar />
        <div className="banner-container">
          <b>Create, explore, & collect digital art NFTs.</b>
          <h2>The new creative economy.</h2>
          <button className='btn banner-btn'>Start your search</button>
        </div>

    </div>
  )
}

export default Banner