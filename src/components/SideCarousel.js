import React from 'react'
import SideCarouselCard from './SideCarouselCard'
import Slider from 'react-slick'

function SideCarousel({nowPlayingList}) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 10000,
    initialSlide: 1
  }
  return <>
  {
    nowPlayingList.map((movie)=>{
      return <SideCarouselCard movie={movie} />
    })
  }
  
  </>
}

export default SideCarousel