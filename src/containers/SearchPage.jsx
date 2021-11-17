import { useState } from 'react'
import { Layout, Alert, Spin } from 'antd'
import { useSelector } from 'react-redux'

import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

const { Content } = Layout

const SearchPage = () => {
	const [searchValue, setSearchvalue] = useState('')
	const movieList = useSelector((state) => state.movieList)

	const valueSearch = (value) => {
		setSearchvalue(value)
	}

	return (
		<Content style={{ margin: '50px 50px' }}>
			<SearchBar valueSearch={valueSearch} />
			<Spin tip="Loading..." spinning={movieList.movieListLoader}>
				{movieList?.movieList?.length === 0 || movieList === undefined || searchValue === '' ? (
					<div></div>
				) : movieList.movieList.data.Error === 'Movie not found!' ? (
					<Alert message={movieList.movieList.data.Error} type="error" />
				) : (
					<MovieCard movies={movieList} />
				)}
			</Spin>
		</Content>
	)
}

export default SearchPage
