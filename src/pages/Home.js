import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../AppProvider'
import {Link} from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'
import './Home.css'
import HeroCarousel from '../components/HeroCarousel'
import Loading from '../components/Loading'
import Movie from './Movie'
import CarouselTypeA from '../components/CarouselTypeA'
import CarouselTypeB from '../components/CarouselTypeB'

function Home() {
  const {setLoading} = useGlobalContext();
    const [nowPlayingList, setNowPlayingList] = useState([]);
    const [upComingList, setUpComingList] = useState([]);
    const [trendingList, setTrendingList] = useState([]);

    var REACT_APP_TMDB_KEY = 'd5a7eca2bcff4fb1ce3a13b6bb31b059';

    // const now_playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    // const up_coming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    // const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    const now_playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1`
    const up_coming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1`
    const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_TMDB_KEY}`
    
    const fetchNowPlaying = async() => {
      try {
        const response = await fetch(now_playing);
        const data = await response.json();
        setNowPlayingList(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error.message)
        setLoading(false);
      }
    }

    const fetchUpComing = async () =>{
      try {
        const response = await fetch(up_coming);
        const data = await response.json();
        setUpComingList(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }

    const fetchTrending = async () =>{
      try {
        const response = await fetch(up_coming);
        const data = await response.json();
        setTrendingList(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    }

    useEffect(()=>{
      fetchNowPlaying();
      fetchUpComing();
      fetchTrending();
    },[]);

    console.log(upComingList);
  return <div className='container'>
    <HeroCarousel nowPlayingList={nowPlayingList} />
    {/* <Movie /> */}
      <section className='row'>
        <div className='row__heading'>
          <h2>What to Watch</h2>
        </div>

        <article className='article'>
          <div className='article__heading'>
            <h3 className='article__header'>Fans Favorite <Link to="/"><FaChevronRight /></Link></h3>
            <p className='article__subheader'>This Week's Top TV and Movie</p>
          </div>
          <CarouselTypeA upComingList={upComingList}/>
        </article>
      </section>

      <section  className='row'>
        <div className='row__heading'>
          <h2>Explore Movie & TV Shows</h2>
        </div>

        <article className='article'>
          <div className='article__heading'>
            <h3 className='article__header'>Comingsoon <Link to="/"><FaChevronRight /></Link></h3>
            <p className='article__subheader'>Trailer for Upcoming Release</p>
          </div>
          <CarouselTypeB trendingList={trendingList}/>
        </article>
      </section>
  </div>
}

export default Home