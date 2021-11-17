import { useState, useEffect } from 'react'
import { Input, Space } from 'antd'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'

import { getMovieList } from '../redux/movies/actions'

const { Search } = Input

const SearchBar = (props) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [debouncedText] = useDebounce(value, 1000)

	const { valueSearch } = props

	useEffect(() => {
		value !== '' ? valueSearch(value) : valueSearch('')
		debouncedText !== '' && dispatch(getMovieList(debouncedText)) //eslint-disable-next-line
	}, [debouncedText, dispatch])

	return (
		<Space direction="horizontal" style={{ marginBottom: '50px', width: '100%', justifyContent: 'center' }}>
			<Search
				placeholder="input search text"
				onChange={(e) => setValue(e.target.value)}
				allowClear
				size="large"
			/>
		</Space>
	)
}

export default SearchBar
