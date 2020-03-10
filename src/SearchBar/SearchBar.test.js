import React from 'react'
import { render } from '@testing-library/react'
import { Input, Select, Button, Col } from 'antd'
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
		const component = create(<SearchBar {...props} />)
		expect(component.toJSON()).toMatchSnapshot()
	})
	test("Expect input value by props", () => {
		const searchText='hello'
		const component = create(<SearchBar {...props} searchText={searchText} />);		
    const instance = component.root;
		expect(instance.findByType(Input).props.value).toBe(searchText)
	})
	test("Expect select value by props", () => {
		const media='hello'
		const component = create(<SearchBar {...props} media={media} />);		
    const instance = component.root;
		expect(instance.findByType(Select).props.value).toBe(media)
	})
})

