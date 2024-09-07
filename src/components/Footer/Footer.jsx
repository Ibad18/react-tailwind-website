import React from 'react'
// import './Footer.css'
import facebookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
const Footer = () => {
    return (
        <div className='footer w-full px-[10%] items-center text-center'>
            <div className="icons flex mx-auto items-center text-center m-5 h-[50px] w-[50px]">
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={twitterIcon} alt="" />
            </div>
            <h4 className='mb-6'>All rights reserved Designed by <span className='text-rose-600'>Ibad Ullah</span></h4>
        </div>
    )
}

export default Footer