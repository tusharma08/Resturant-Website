import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.image} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
              <h3>Social Media</h3>
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>RESTURANT</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About us</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+918826701207</li>
                <li>tushar.sh08@gmail.com</li>
            </ul>
        </div>
      </div>
      <br />
      <p className="footer-copyright">Copyright 2024 @ Tushar Sharma - All Right Reserved.</p>
    </div>
  )
}

export default Footer
