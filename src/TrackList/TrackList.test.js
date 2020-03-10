import React from 'react'
import TrackList from './TrackList'
import { create } from "react-test-renderer"
import { Avatar, List } from 'antd'

const props = {    
	tracks: [],	
}

describe("TrackList component", () => {
  test("Matches the snapshot", () => {
    const component = create(<TrackList {...props} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
  test("Render with mock", () => {
    const tracks = [{
      artistName: 'Jakson',
      trackName: 'Jakson 5',
    }]
    const component = create(<TrackList {...props} tracks={tracks}/>)
    const instance = component.root;
    expect(instance.findByType(Avatar).props.src).toBe(tracks[0].artworkUrl100)
    expect(instance.findByType(List.Item.Meta).props.title).toBe(tracks[0].artistName)
  })
})