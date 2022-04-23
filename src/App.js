import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SharedLayout from './pages/SharedLayout'
import Video from './pages/Video'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="/video/:videoID" element={<Video />}/>
      </Route>
      
    </Routes>
  </BrowserRouter>
}

export default App