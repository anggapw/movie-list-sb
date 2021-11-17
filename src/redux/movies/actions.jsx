import axios from 'axios'

export const actions = {
	GET_MOVIE_LIST: 'GET_MOVIE_LIST',
	MOVIE_LIST: 'MOVIE_LIST',
	GET_MOVIE_DETAIL: 'GET_MOVIE_DETAIL',
	MOVIE_DETAIL: 'MOVIE_DETAIL'
}

export const getMovieList = (title) => {
	return async (dispatch) => {
		try {
			dispatch({ type: actions.GET_MOVIE_LIST })

			const response = await axios.get(
				`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}`
			)

			dispatch({ type: actions.MOVIE_LIST, payload: response })
		} catch (error) {
			console.log(error)
		}
	}
}

export const getMovieDetail = (id) => {
	return async (dispatch) => {
		try {
			dispatch({ type: actions.GET_MOVIE_DETAIL })

			const response = await axios.get(
				`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`
			)

			dispatch({ type: actions.MOVIE_DETAIL, payload: response })
		} catch (error) {
			console.log(error)
		}
	}
}
