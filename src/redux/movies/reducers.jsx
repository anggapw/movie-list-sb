import { actions } from './actions'

const initialState = {
	movieListLoader: false,
	movieList: [],
	movieDetailLoader: false,
	movieDetail: {}
}

const moviesReducers = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_MOVIE_LIST:
			return {
				...state,
				movieListLoader: true
			}
		case actions.MOVIE_LIST:
			return {
				...state,
				movieListLoader: false,
				movieList: action.payload
			}

		case actions.GET_MOVIE_DETAIL:
			return {
				...state,
				movieDetailLoader: false
			}
		case actions.MOVIE_DETAIL:
			return {
				...state,
				movieListLoader: false,
				movieDetail: action.payload
			}

		default:
			return state
	}
}

export default moviesReducers
