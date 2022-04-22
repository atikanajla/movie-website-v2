import React from 'react'
import './SideCarouselCard.css'
import {BsPlayCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function SideCarouselCard({movie}) {
  return (
    <li className='SideCarousel__card'>
        <div className='card-poster'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
        </div>
        <div className='card-detail'>
            <Link to={`video/${movie.id}`}><BsPlayCircle /></Link>            
            <p>{movie.title}</p>
        </div>
    </li>
  )
}

export default SideCarouselCard