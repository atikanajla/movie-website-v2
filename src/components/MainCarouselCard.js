import React from 'react'
import {BsPlayCircle, BsFillBookmarkPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function MainCarouselCard({movie}) {
    const {
        backdrop_path,
        poster_path,
        id,
        title,
      } = movie;
  return (
    <Link to={`video/${id}`}>
        <div key={id} className='main-carousel-card'>
          <div className='carousel__backdrop'>
            <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} alt={title}></img>
            <div className='inner-container'></div>
          </div>
          <div className='carousel__content'>
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
  )
}

export default MainCarouselCard