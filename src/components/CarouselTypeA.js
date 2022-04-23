import React from 'react'
import CarouselTypeACard from'./CarouselTypeACard'
import Slider from 'react-slick'

function CarouselTypeA({upComingList}) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrow: true,
  }
  return <Slider {...settings}>
    {/* // return <div> */}
    {
      upComingList.map((movie)=>{
        return <CarouselTypeACard key={movie.id} movie={movie}/>
      })
    }

    {/* // </div> */}
  </Slider>
    
}

export default CarouselTypeA