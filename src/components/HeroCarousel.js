import React from 'react'
import './HeroCarousel.css'
import MainCarousel from './MainCarousel'
import SideCarousel from './SideCarousel'

function HeroCarousel({nowPlayingList}) {
  return <div className='hero-carousel'>
            <div id='main-carousel'>
              <MainCarousel nowPlayingList={nowPlayingList}/>
            </div>
            <div id='side-carousel'>
              <h3 className='title'>Now Playing</h3>
              <SideCarousel nowPlayingList={nowPlayingList} />
              <h3>Browse Trailer</h3>
            </div>

            

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vc7_mH2PWHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            
        </div>
}

export default HeroCarousel