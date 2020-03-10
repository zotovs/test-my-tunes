import React from 'react'
import TrackList from './TrackList'
import { create } from "react-test-renderer"

const props = {    
	tracks: [],	
}

describe("TrackList component", () => {
  test("Matches the snapshot", () => {
    const button = create(<TrackList {...props} />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})