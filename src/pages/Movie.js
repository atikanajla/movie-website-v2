import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {MdOndemandVideo} from 'react-icons/md'
import {FaCaretDown, FaShareAlt, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {IoMdPhotos} from 'react-icons/io'
import {BsBookmarkPlus} from 'react-icons/bs'
import {FiSearch, FiStar} from 'react-icons/fi'
import Slider from 'react-slick'

function Movie() {
    const {movieID} = useParams();//parameternya harus sama dgn path di App.js
    const [movie, setMovie] = useState([]);
    
    const fetchMovie = async () =>{
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
          const data = await response.json();
          setMovie (data); 
        } catch (error) {
          console.log(error.message)
        }
    }

    useEffect(()=>{
        fetchMovie();
      },[])

  //RELEASE DATE FORMATTING
  const formattedDate = (date) =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const d = new Date(date);
    return `${monthNames[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`
}

if(!movie) return <h2>Opps, film tidak di temukan!</h2>
return (
    <div className='movie-page container'>
        <section className="hero">
        <div className="hero-title">
                <div className="hero-title-wrapper">
                    <div className="hero-title__pagination"><FaChevronLeft /><a href="">What to watch</a></div>
                    <h3 className="hero-title__title">{movie.title}</h3>
                    <p className="hero-title__date">Episode aired {formattedDate(movie.release_date)}</p>
                </div>
                <div className="hero-title-rating">
                    <div className="content">
                        <h4>YOUR RATING</h4>
                        <div className="btn">
                            <FiStar />
                            <span>RATE</span>
                        </div>
                    </div>
                </div>
        </div>

        <div className="hero-subnav">
                <div className="hero-subnav__left-block">
                    <div className="episode">S3 <span className="separator"> . </span>E6</div>
                    <FaChevronLeft />
                    <button className="btn">All Episode</button>
                    <FaChevronRight />
                </div>

                <div className="hero-subnav__right-block">
                    <div className="presentation">
                        <a href="">Cast & Crew</a>
                        <span> . </span>
                        <a href="">IMDbpro</a> 
                    </div>
                    <button className="btn">
                        <FiSearch />
                        <span>Search Topic</span>
                    </button>
                    <FaShareAlt />
                </div>
        </div>

        <div className="hero-movie">
                <div className="hero-movie__poster">
                    <div className="watchlist">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""></img>
                    </div>
                    <div className="video">
                        <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt=""></img>
                    </div>
                    <div className="video-count">
                        <MdOndemandVideo/>
                        <p>1 video</p>
                    </div>
                    <div className="photo-count">
                        <IoMdPhotos />
                        <p>2 Photos</p>
                    </div>
                </div>
        </div>

        <div className="hero-movie-info">
                <div className="genre">
                    {/* <Genres genres={movie.genres}/>                 */}
                </div>
                <div className="plot">
                    <p>{movie.overview}</p>
                </div>
                <div className="watchlist-btn">
                    <button onClick={console.log('addto watchlist')}><BsBookmarkPlus />Add to watchlist</button>
                    <FaCaretDown />
                </div>
            </div>
        </section>
    </div>
) 
}

export default Movie