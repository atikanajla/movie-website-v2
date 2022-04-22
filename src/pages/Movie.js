import React from 'react'
import Slider from 'react-slick'

function Movie() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 10000,
        initialSlide: 1
    }
//   return <h2>hello</h2>
  return <Slider {...settings}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
  </Slider>
}

export default Movie