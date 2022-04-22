import React from 'react'
import './MainCarousel.css'
import Slider from "react-slick"
import {BsPlayCircle, BsFillBookmarkPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function MainCarousel({nowPlayingList}) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false //menghilangkan arrow
  }
  return <Slider className='main-carousel' {...settings}>
  {/* // return <> */}
    {
    nowPlayingList.map((movie)=>{
      const {
        backdrop_path,
        poster_path,
        id,
        title,
      } = movie;
      return <Link to={`video/${id}`}>
        <div key={id} className='main-carousel-card'>
          <div className='card__backdrop'>
            <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} alt={title}></img>
            <div className='inner-container'></div>
          </div>
          <div className='card__content'>
            <div className='addto-watchlist'>
              <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`}></img>
              <div className='inner-container'></div>
              <BsFillBookmarkPlusFill />
            </div>
            <BsPlayCircle className='play-btn'/>
            <h1>{title}</h1>
          </div>
        </div>
      
      </Link>
      
    })
  }
  {/* // </> */}
  </Slider>
}

export default MainCarousel