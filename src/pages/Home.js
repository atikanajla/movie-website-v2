import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../AppProvider'
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

    const now_playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    const up_coming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    
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
    <section>
      <h1>Coming soon to teather</h1>  
      <p>Trailer for upcoming release</p>
      <CarouselTypeA upComingList={upComingList}/>
    </section>

    <section>
      <h1>Fans Favorite</h1>  
      <p>This week's top TV and movies</p>
      <CarouselTypeB trendingList={trendingList}/>
    </section>
  </div>
}

export default Home