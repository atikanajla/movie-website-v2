import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../AppProvider'
import './Home.css'
import HeroCarousel from '../components/HeroCarousel'
import Loading from '../components/Loading'
import Movie from './Movie'

function Home() {
  const {setLoading} = useGlobalContext();
    const [nowPlayingList, setNowPlayingList] = useState([]);

    const now_playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    
    const fetchMovie = async() => {
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

    useEffect(()=>{
      fetchMovie();
    });

  return <div>
    <HeroCarousel nowPlayingList={nowPlayingList} />
    {/* <Movie /> */}
  </div>
}

export default Home