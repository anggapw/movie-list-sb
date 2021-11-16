import { combineReducers } from 'redux'

import moviesReducers from './movies/reducers'

const rootReducers = combineReducers({
	movieList: moviesReducers
})

export default rootReducers
