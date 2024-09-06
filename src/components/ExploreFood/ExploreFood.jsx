import React from 'react'
// import './ExploreFood.css'
import pizza_img from '../../assets/pizza-img.jpeg'
import burger_img from '../../assets/burger-img.jpeg'
import momo_img from '../../assets/momo-img.jpeg'
const ExploreFood = () => {
    return (
        <div className='text-center px-[10%] mt-12 mb-16 sm:px-0'>
            <h1>Explore Foods</h1>
            <div className="relative flex justify-around my-12">
                <div className="image ml-4 mr-4">
                    <img src={pizza_img} className='rounded-lg w-[320px] h-[400px]' />
                    <h3 className='absolute text-white text-center mt-[-60px] ml-[110px] sm:ml-[140px]'>Pizza</h3>
                </div>
                <div className="image ml-4 mr-4">
                    <img src={burger_img} className='rounded-lg w-[320px] h-[400px]' />
                    <h3 className='absolute text-white text-center mt-[-60px] ml-[110px] sm:ml-[140px]'>Burger</h3>
                </div>
                <div className="image ml-4 mr-4">
                    <img src={momo_img} className='rounded-lg w-[320px] h-[400px]'/>
                    <h3 className='absolute text-white text-center mt-[-60px] ml-[110px] sm:ml-[140px]'>Momo</h3>
                </div>
            </div>
        </div>
    )
}

export default ExploreFood