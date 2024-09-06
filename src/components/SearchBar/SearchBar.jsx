import React from 'react'
// import './SearchBar.css'
import search_img from '../../assets/search_img.png'
const SearchBar = () => {
    return (
        <div className='w-full h-[250px] flex items-center center'>
            <img src={search_img} className='w-full h-full relative' />
            <div className="absolute">
                <input type="text" placeholder='Search for food' />
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar