import React from 'react'
import './MainCarousel.css'
import Slider from "react-slick"
import MainCarouselCard from './MainCarouselCard'

function MainCarousel({nowPlayingList}) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false //menghilangkan arrow
  }

  return <div>
      {
        nowPlayingList.map((movie)=>{
          return <MainCarouselCard movie={movie} />
        })
      }
  </div>

  
}

export default MainCarousel