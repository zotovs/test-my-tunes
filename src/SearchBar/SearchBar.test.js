import React from 'react'
import { render } from '@testing-library/react'
import { create } from 'react-test-renderer'

import SearchBar from './SearchBar'
import { MEDIA_LIST } from '../constants/tunes.constants'

const props = {    
	media: MEDIA_LIST[MEDIA_LIST.length - 1],
	searchText: '',
	selectMedia: jest.fn(),
	changeSearch: jest.fn(),	
	findTracks: jest.fn(),	
}

describe("SearchBar component", () => {
	test("Matches the snapshot", () => {
		const button = create(<SearchBar {...props} />)
		expect(button.toJSON()).toMatchSnapshot()
	})
})

