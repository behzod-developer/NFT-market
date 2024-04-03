import React from 'react'
import './Home.css'
import Banner from '../../Components/Banner/Banner'
import Network from '../../Components/Main/Network/Network'
import Select from '../../Components/Main/Select/Select'

function Home() {
  return (
    <div className='home'>
        <Banner />
        <Network />
        <Select />
    </div>
  )
}

export default Home