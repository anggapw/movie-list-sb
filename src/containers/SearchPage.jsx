import { useEffect } from 'react'
import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../redux/movies/actions'

import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

const { Content } = Layout

const SearchPage = () => {
	const dispatch = useDispatch()
	const movieList = useSelector((state) => state)

	useEffect(() => {
		console.log(movieList)
	})

	const handleSearch = (title) => {
		dispatch(getMovieList(title))
	}
	return (
		<Content style={{ margin: '50px 50px' }}>
			<SearchBar handleSearch={handleSearch} />
			<MovieCard />
		</Content>
	)
}

export default SearchPage
