import React, { useEffect, useState } from 'react'
import message from 'antd/lib/message'

import SearchBar from '../SearchBar'
import TrackList from '../TrackList'
import { API_URL } from '../constants/api.consants'

import './App.css'
import { MEDIA_LIST } from '../constants/tunes.constants'

function App() {
  const [tracks, setTracks] = useState([])
  const [media, selectMedia] = useState(MEDIA_LIST[MEDIA_LIST.length - 1])
  const [searchText, changeSearch] = useState('')

  const findTracks = () => {
    fetch(`${API_URL}?term=${searchText}&media=${media}`)
      .then(response => response.json())
      .then(data => data && setTracks(data.results))
      .catch(err => message.error(err.message))
  }

  const handleChangeSearch = e => changeSearch(e.target.value)
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          media={media}
          searchText={searchText}
          selectMedia={selectMedia}
          changeSearch={handleChangeSearch}
          findTracks={findTracks}
         />       
      </header>
      <content>
        <TrackList
            tracks={tracks}
            />
      </content>
    </div>
  )
}

export default App
