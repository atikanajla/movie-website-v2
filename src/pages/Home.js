import React from 'react'
import { useGlobalContext } from '../AppProvider'
import MainCarousel from '../components/MainCarousel'

function Home() {
    const {loading} = useGlobalContext();
    console.log(loading);
  return <div>
      <MainCarousel />
      
  </div>
}

export default Home