import React from 'react'
import brand from '../assets/brand.avif'
const Navbar = () => {
    return (
        <nav className='w-full h-[70px] px-[10%] flex items-center justify-between md:px-5 md:h-[75px]'>
            <div className="flex items-center justify-between sm:block md:block mt-0 sm:mt-[-10px] md:mt-[-10px] leading-none">
                <img src={brand} className='h-[60px] w-[60px]' />
                <h4>wowFood</h4>
            </div>
            <ul className='list-none flex text-[rgb(197,26,26)] font-semibold'>
                <li className='ml-8 cursor-pointer'>Home</li>
                <li className='ml-8 cursor-pointer'>About</li>
                <li className='ml-8 cursor-pointer'>Foods</li>
                <li className='ml-8 cursor-pointer'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar