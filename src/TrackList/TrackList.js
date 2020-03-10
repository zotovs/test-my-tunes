import React from 'react'
import { array } from 'prop-types'
import { List, Avatar } from 'antd'

const TrackList = ({
	tracks,
}) => {
    return (
			<List
				className='content-data'
				itemLayout="horizontal"
				dataSource={tracks}
				renderItem={item => (
					<List.Item>
						<List.Item.Meta
							avatar={<a href={item.trackViewUrl}><Avatar src={item.artworkUrl100} /></a>}
							title={item.artistName}
							description={<a href={item.trackViewUrl}>{item.trackName}</a>}
						/>
					</List.Item>
				)}
			/>
    )
}

TrackList.propTypes = {
    tracks: array.isRequired,
}

export default TrackList