import React from 'react'
import {BsPlayCircle, BsFillBookmarkPlusFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './CarouselTypeACard.css'

function CarouselTypeACard({movie}) {
  const {id,release_date, backdrop_path, title} = movie;
  return (
    <div className='CarouselTypeA__card'>
      <div className='card__backdrop'>
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title}></img>
        <Link to={`video/${id}`}><BsPlayCircle /></Link>
        <div className='inner-container'></div>
      </div>
      <div className='card__content'>
        <BsFillBookmarkPlusFill />
        <div className='detail'>
          <div>{release_date}</div>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default CarouselTypeACard