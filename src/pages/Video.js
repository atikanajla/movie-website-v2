import React from 'react'
import {useParams} from 'react-router-dom'

function Video() {
    const {videoID} = useParams();

  return (
    <div>{videoID}</div>
  )
}

export default Video