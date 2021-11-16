import { Input, Space } from 'antd'

const { Search } = Input

const SearchBar = () => {
	const onSearch = (value) => console.log(value)
	return (
		<Space direction="horizontal" style={{ marginBottom: '50px', width: '100%', justifyContent: 'center' }}>
			<Search
				placeholder="input search text"
				onChange={(e) => onSearch(e.target.value)}
				enterButton
				allowClear
				size="large"
			/>
		</Space>
	)
}

export default SearchBar
