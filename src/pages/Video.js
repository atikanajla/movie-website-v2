import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {FaTimes, FaShareAlt, FaChevronRight} from 'react-icons/fa'
import {BsBookmarkPlus} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Video() {
    const {videoID} = useParams();
    const [videolist, setVideoList] = useState([]);
    const [trailerLink, setTrailerLink] = useState('');
    const [movie, setMovie] = useState([]);

    const image_link = `https://image.tmdb.org/t/p/w500/`;

    const fetchMovie = async () =>{
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${videoID}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
        const data = await response.json();
        setMovie (data); 
      } catch (error) {
        console.log(error.message)
      }
    }

    const fetchVideo = async () =>{
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
        const data = await response.json();
        const tempList = data.results;
        setVideoList(tempList);
        //cari trailer link
        const trailer = tempList.filter(item=> item.type === 'Trailer');
        setTrailerLink(trailer[0].key);
      } catch (error) {
        console.log(error.message)
      }
    }

    
    useEffect(()=>{
      fetchMovie();
      fetchVideo();
    },[])

  if(!videolist) return <h2>no movie</h2>
  return(
    <div className='trailer-page container'>
      
      <section className="trailer">
            <div className="trailer__video">
                <div className="action">
                    <div className="btn close-btn"><FaTimes /> Close</div>
                    <div className="btn-round share-btn"><FaShareAlt /></div>
                </div>
                <div className="video">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerLink}?controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="movie__info">
                <div className="movie__info__summary">
                    <div className="poster" >
                        <img src={image_link+movie.poster_path} alt=""></img>
                        <BsBookmarkPlus />
                    </div>
                    <div className="info">
                        <h4><Link to={`/movie/${videoID}`}>{movie.title}</Link> (<span>{new Date(movie.release_date).getFullYear()}</span>)</h4>
                        {/* <p><Genres genres={genres}/></p> */}
                    </div>
                    <button className="btn"><FaChevronRight /></button>
                </div>
                <div className="line"></div>
                <div className="movie__info__sinopsis">
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </section>
    </div>

  )
  
}

export default Video