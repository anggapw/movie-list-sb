import { actions } from './actions'

const initialState = {
	movieListloader: false,
	movieList: []
}

const moviesReducers = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_MOVIE_LIST:
			return {
				...state,
				movieListloader: true
			}
		case actions.MOVIE_LIST:
			return {
				...state,
				movieListloader: false,
				movieList: action.payload
			}

		default:
			return state
	}
}

export default moviesReducers
