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
    // variableWidth: true,
    autoplaySpeed: 10000,
    initialSlide: 1,
    arrows: false //menghilangkan arrow
  }

  // return <div>SideCarousel</div>
  return <Slider  className="side-carousel" {...settings}>
  {
    nowPlayingList.map((movie)=>{
      return <SideCarouselCard key={movie.id} movie={movie} />
    })
  }
  
  </Slider>
}

export default SideCarousel