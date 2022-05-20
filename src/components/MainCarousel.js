import React from 'react'
import './MainCarousel.css'
import Slider from "react-slick"
import MainCarouselCard from './MainCarouselCard'

function MainCarousel({nowPlayingList}) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableHeight: true,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false //menghilangkan arrow
  }

  return <Slider {...settings}>
      {
        nowPlayingList.map((movie)=>{
          return <MainCarouselCard key={movie.id} movie={movie} />
        })
      }
  </Slider>

  
}

export default MainCarousel