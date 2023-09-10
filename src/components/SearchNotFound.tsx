import React from 'react'
import SearchBar from './SearchBar'

const SearchNotFound = () => {
    return (
        <div className='center bg flex-wrapper' style={{ paddingTop: '20%' }}>
            <div className='search_not_found'>Search not found</div>
            <div className='white_word'>please try again</div>
            <br />
            <SearchBar />
        </div>
    )
}

export default SearchNotFound;
