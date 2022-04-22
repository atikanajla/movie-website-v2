import React from 'react'
import MainCarousel from './MainCarousel'
import SideCarousel from './SideCarousel'

function HeroCarousel({nowPlayingList}) {
  return <div className='hero-carousel'>
            <h2>HeroCarousel</h2> 
            <div className='main-carousel'>
              {/* <MainCarousel nowPlayingList={nowPlayingList}/> */}
            </div>
            <div className='side-carousel'>
              <SideCarousel nowPlayingList={nowPlayingList} />
            </div>

            

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vc7_mH2PWHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            
        </div>
}

export default HeroCarousel