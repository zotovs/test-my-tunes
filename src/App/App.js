import React, { useEffect, useState } from 'react'
import message from 'antd/lib/message'

import TrackList from '../TrackList'
import { API_URL } from '../constants/api.consants'

import './App.css'

function App() {
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    fetch(`${API_URL}?term=jack+johnson&entity=musicVideo`)
    .then(response => response.json())
    .then(data => data && setTracks(data.results))
    .catch(err => message.error(err.message))
  }, [])
  return (
    <div className="App">
     
      <content>
        <TrackList
            tracks={tracks}
            />
      </content>
    </div>
  )
}

export default App
