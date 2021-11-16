import MoviesAPI from '../../api/MoviesAPI'

export const actions = {
	GET_MOVIE_LIST: 'GET_MOVIE_LIST',
	MOVIE_LIST: 'MOVIE_LIST'
}

export const getMovieList = (title) => {
	return async (dispatch) => {
		try {
			dispatch({ type: actions.GET_MOVIE_LIST })

			const response = await MoviesAPI({
				method: 'GET',
				url: `s=${title}`
			})

			dispatch({ type: actions.MOVIE_LIST, payload: response })
		} catch (error) {
			console.log(error)
		}
	}
}
