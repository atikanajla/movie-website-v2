import React from 'react'
import {Link} from 'react-router-dom'
import './CarouselTypeBCard.css'
import {BsFillBookmarkPlusFill, BsFillStarFill, BsStar, BsPlusLg, BsPlayFill} from 'react-icons/bs'

function CarouselTypeBCard({movie}) {
  const {id, poster_path, title, vote_average} = movie;
  return (
    <div className='CarouselTypeB__Card'>
      <div className='carousel__poster'>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`}></img>
        <div className='inner-container'></div>
        <BsFillBookmarkPlusFill/>
      </div>
      <div className='carousel__content'>
        <div className='rating'>
          <span className='current-rating'><BsFillStarFill />{vote_average}</span>
          <span className='rate-this btn'><BsStar /></span>
        </div>
      </div>
      <div className='carousel__btn'>
        <button className='watchlist btn'><BsPlusLg /> Watchlist</button>
        <button className='btn'><BsPlayFill /> Trailer</button>
      </div>
    </div>
  )
}

export default CarouselTypeBCard