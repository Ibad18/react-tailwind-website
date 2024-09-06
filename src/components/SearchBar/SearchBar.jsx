import React from 'react'
// import './SearchBar.css'
import search_img from '../../assets/search_img.png'
const SearchBar = () => {
    return (
        <div className='w-full h-[250px] flex items-center justify-center'>
            <img src={search_img} className='w-full h-full relative' />
            <div className="absolute">
                <input className='border-none outline-none p-2 w-[400px] rounded-md mr-1' type="text" placeholder='Search for food' />
                <button className='border-none outline-none p-2 bg-[rgb(206,7,7)] text-white w-[80px] rounded-md cursor-pointer'>Search</button>
            </div>
        </div>
    )
}

export default SearchBar