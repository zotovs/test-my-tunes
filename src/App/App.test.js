import React from 'react'
import { create, act } from "react-test-renderer"
import App from './App'
import SearchBar from '../SearchBar'
import TrackList from '../TrackList'


describe("App component", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  
  test("Matches the snapshot", () => {
    const app = create(<App />)
    expect(app.toJSON()).toMatchSnapshot()
  })  
})
