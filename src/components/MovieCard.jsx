import React, { useState } from 'react'
import { Card, Col, Row, Modal } from 'antd'
import { useDispatch } from 'react-redux'

import { getMovieDetail } from '../redux/movies/actions'

const { Meta } = Card

const MovieCard = (props) => {
	const dispatch = useDispatch()
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = (value) => {
		dispatch(getMovieDetail(value))
		setIsModalVisible(true)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	return (
		<div>
			<Row justify="space-around">
				{props.movies.movieList.data.Search &&
					props.movies.movieList.data.Search.map((value, index) => (
						<Col span={4}>
							<Card
								centered
								hoverable
								style={{ width: 240, marginBottom: '2rem' }} //eslint-disable-next-line
								cover={<img src={value.Poster} height="320" />}
								onClick={() => showModal(value.imdbID)}
							>
								<Meta title={value.Title} description={value.Year} />
							</Card>
						</Col>
					))}

				<Modal
					visible={isModalVisible}
					title={props.movies.movieDetail.data !== undefined ? props.movies.movieDetail.data.Title : ''}
					onCancel={handleCancel}
					footer={null}
				>
					<Row justify="space-between">
						{props.movies.movieDetail.data &&
							props.movies.movieDetail.data.Ratings.map((value) => (
								<Col span={8}>
									{value.Source === 'Internet Movie Database'
										? 'IMDB'
										: value.Source === 'Rotten Tomatoes'
										? 'Rotten Tomatoes'
										: value.Source === 'Metacritic'
										? 'Metacritic'
										: ''}
									<h4>{value.Value}</h4>
								</Col>
							))}
						<Col>
							<h4 style={{ textAlign: 'justify' }}>
								{props.movies.movieDetail.data !== undefined ? props.movies.movieDetail.data.Plot : ''}
							</h4>
							<br />
							<h4>
								Actors:{' '}
								{props.movies.movieDetail.data !== undefined
									? props.movies.movieDetail.data.Actors
									: ''}
							</h4>
							<h4>
								Director:{' '}
								{props.movies.movieDetail.data !== undefined
									? props.movies.movieDetail.data.Director
									: ''}
							</h4>
							<h4>
								Rating:{' '}
								{props.movies.movieDetail.data !== undefined ? props.movies.movieDetail.data.Rated : ''}
							</h4>
							<h4>
								Raelease Date:{' '}
								{props.movies.movieDetail.data !== undefined
									? props.movies.movieDetail.data.Released
									: ''}
							</h4>
						</Col>
					</Row>
				</Modal>
			</Row>
		</div>
	)
}

export default MovieCard
