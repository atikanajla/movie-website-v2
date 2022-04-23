import React from 'react'
import CarouselTypeBCard from './CarouselTypeBCard'
import Slider from 'react-slick'

function CarouselTypeB({trendingList}) {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    arrow: true,
  }
  return (
    <Slider {...settings}>
      {
        trendingList.map((movie)=>{
          return <CarouselTypeBCard key={movie.id} movie={movie}/>
        })
      }
    </Slider>
  )
}

export default CarouselTypeB