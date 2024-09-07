import React from 'react'
// import './FoodMenu.css'
import food_title from '../../assets/food-title-img1.jpeg'
import food_title2 from '../../assets/food-title-img2.jpeg'
import food_title3 from '../../assets/food-title-img3.jpeg'
import smokey_burger from '../../assets/smokey-burger-img.jpeg'
import nice_burger from '../../assets/nice-burger-img.jpeg'
import chicke_steam_img from '../../assets/chicke-steam-momo-img.jpeg'
const FoodMenu = () => {
  return (
    <div className='food-menu text-center bg-gray-300 p-[30px] px-[10%]'>
      <h1 className='m-4'>Food Menu</h1>
      <div className="row flex items-center justify-between my-5">
        <div className="menu flex p-5 bg-white h-[120px] w-[49%] rounded-[10px] text-left">
          <img src={food_title} alt="" className='w-[80px] h-[80px] rounded-[10px]' />
          <div className="right pl-5 leading-[1.5]">
            <h5>Food Title</h5>
            <h5>$ 2.3</h5>
            <p className='text-gray-600 text-[10px]'>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="menu flex p-5 bg-white h-[120px] w-[49%] rounded-[10px] text-left">
          <img src={smokey_burger} alt="" className='w-[80px] h-[80px] rounded-[10px]'/>
          <div className="right pl-5 leading-[1.5]">
            <h5>Smokey Burger</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
        </div>
        </div>
        <div className="row flex items-center justify-between my-5">
          <div className="menu flex p-5 bg-white h-[120px] w-[49%] rounded-[10px] text-left">
          <img src={nice_burger} alt="" className='w-[80px] h-[80px] rounded-[10px]'/>
          <div className="right pl-5 leading-[1.5]">
            <h5>Nice Burger</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
          <div className="menu flex p-5 bg-white h-[120px] w-[49%] rounded-[10px] text-left">
          <img src={food_title2} alt="" className='w-[80px] h-[80px] rounded-[10px]'/>
          <div className="right pl-5 leading-[1.5]">
            <h5>Food Title</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
        </div>
        <div className="row flex items-center justify-between my-5">
          <div className="menu flex p-5 bg-white h-[120px] w-[49%] rounded-[10px] text-left">
          <img src={food_title3} alt="" className='w-[80px] h-[80px] rounded-[10px]'/>
          <div className="right pl-5 leading-[1.5]">
            <h5>Food Title</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
          <div className="menu flex p-5 bg-white h-[120px] w-[49%] rounded-[10px] text-left">
          <img src={chicke_steam_img} alt="" className='w-[80px] h-[80px] rounded-[10px]'/>
          <div className="right pl-5 leading-[1.5]">
            <h5>Chicken Steam Momo</h5>
            <h5>$ 2.3</h5>
            <p>Made with Italian Sauce, Chicken and organice vegetables </p>
            <button>Order Now</button>
          </div>
          </div>
        </div>
        <h4 className='text-rose-400'>See All Foods</h4 >
      </div>
      )
}

      export default FoodMenu