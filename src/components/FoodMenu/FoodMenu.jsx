import React from 'react'
import './FoodMenu.css'
import food_title from '../../assets/food-title-img1.jpeg'
import food_title2 from '../../assets/food-title-img2.jpeg'
import food_title3 from '../../assets/food-title-img3.jpeg'
import smokey_burger from '../../assets/smokey-burger-img.jpeg'
import nice_burger from '../../assets/nice-burger-img.jpeg'
import chicke_steam_img from '../../assets/chicke-steam-momo-img.jpeg'
const FoodMenu = () => {
  return (
    <div className='food-menu'>
      <h1>Food Menu</h1>
      <div className="row">
        <div className="menu">
          <img src={food_title} alt="" />
          <div className="right">
            <h5>Food Title</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="menu">
          <img src={smokey_burger} alt="" />
          <div className="right">
            <h5>Smokey Burger</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="menu">
          <img src={nice_burger} alt="" />
          <div className="right">
            <h5>Nice Burger</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
          <div className="menu">
          <img src={food_title2} alt="" />
          <div className="right">
            <h5>Food Title</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="menu">
          <img src={food_title3} alt="" />
          <div className="right">
            <h5>Food Title</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
          <div className="menu">
          <img src={chicke_steam_img} alt="" />
          <div className="right">
            <h5>Chicken Steam Momo</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
        </div>
        <h4>See All Foods</h4 >
      </div>
      )
}

      export default FoodMenu