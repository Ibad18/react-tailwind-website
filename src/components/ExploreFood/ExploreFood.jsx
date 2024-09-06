import React from 'react'
import './ExploreFood.css'
import pizza_img from '../../assets/pizza-img.jpeg'
import burger_img from '../../assets/burger-img.jpeg'
import momo_img from '../../assets/momo-img.jpeg'
const ExploreFood = () => {
    return (
        <div className='explore-foods'>
            <h1>Explore Foods</h1>
            <div className="images">
                <div className="image">
                    <img src={pizza_img} alt="" />
                    <h3>Pizza</h3>
                </div>
                <div className="image">
                    <img src={burger_img} alt="" />
                    <h3>Burger</h3>
                </div>
                <div className="image">
                    <img src={momo_img} alt="" />
                    <h3>Momo</h3>
                </div>
            </div>
        </div>
    )
}

export default ExploreFood