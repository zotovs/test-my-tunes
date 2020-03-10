import React from 'react'
import { Input, Select, Button, Row, Col } from 'antd'
import { MEDIA_LIST } from '../constants/tunes.constants'
import { string, func } from 'prop-types'

import './styles.css'

const { Option } = Select

const SearchBar = ({
	media,
	searchText,
	selectMedia,
	changeSearch,
	findTracks,
}) => (
		<Row gutter={16}>
			<Col span={14}>
				<Input
					type="text"
					value={searchText}
					onChange={changeSearch}
				/>
			</Col>
			<Col span={6}>
				<Select
					value={media}
					className='select'
					onChange={selectMedia}>
					{
						MEDIA_LIST.map(media =>(
								<Option key={media} value={media}>{ media }	</Option>
						))
					}					
				</Select>
			</Col>
			<Col span={4}>
				<Button type="primary" onClick={findTracks}>
					Submit
				</Button>
			</Col>
		</Row>
	)


SearchBar.propTypes = {
	media: string.isRequired,
	searchText: string.isRequired,
	selectMedia: func.isRequired,
	changeSearch: func.isRequired,
	findTracks: func.isRequired,
}

export default SearchBar