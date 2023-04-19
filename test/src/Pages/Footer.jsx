import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="about">
          <h1>GYM</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <i class="fa fa-facebook" style={{fontSize:"46px",color:'red'}} ></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
        </div>
        <div className="">
         <span>Healithy Living</span>
         <p>Lorem, ipsum.</p>
         <p>Lorem, ipsum.</p>
         <p>Lorem, ipsum.</p>
        </div>
        <div className="service">
         <span>Services</span>
         <p>Lorem, ipsum.</p>
         <p>Lorem, ipsum.</p>
         <p>Lorem, ipsum.</p>
        </div>
        <div className="program">
         <span>Programms</span>
         <p>Lorem, ipsum.</p>
         <p>Lorem, ipsum.</p>
         <p>Lorem, ipsum.</p>
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
