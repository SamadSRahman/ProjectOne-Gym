import React from 'react'
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="about">
          <h1>Power Fitness</h1>
          <p>Push Your Limits Till There Are None.</p>
          <a href="https://www.facebook.com" target="blank" style={{ color: 'white' }}>{<BsFacebook />}</a>
          <a href="https://www.instagram.com/" target="blank" style={{ color: 'white' }}>{<BsInstagram />}</a>
          <a href="https://www.youtube.com/" target="blank" style={{color:'white'}}>{<BsYoutube/>}</a>
        </div>
        <div className="footer-links">
         <span>POLICIES & LEGAL</span>
         <p>Privacy policy</p>
         <p>Terms & Conditions - Website.</p>
         <p>Terms & Conditions - Members</p>
        </div>
        <div className="service">
         <span>Clubs</span>
         <p>Club finder</p>
         <p>Club operating hours</p>
         <p>Get 1 Day Free Pass</p>
        </div>
        <div className="program">
         <span>CUSTOMER SERVICE</span>
         <p>Contact us</p>
         <p>FAQs</p>
         <p>Members' Area</p>
        </div>
        <hr/>
     </div>
      
      <div className="par">
        <p>@2023 all rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
