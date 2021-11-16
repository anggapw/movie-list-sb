import axios from 'axios'

const MoviesAPI = axios.create({
	baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&`
})

export default MoviesAPI
