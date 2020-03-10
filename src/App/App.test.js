import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { create } from "react-test-renderer"


describe("App component", () => {
  test("Matches the snapshot", () => {
    const button = create(<App />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})
