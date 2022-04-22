import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/video/:videoID" element={<Video />}/>
      
    </Routes>
  </BrowserRouter>
}

export default App