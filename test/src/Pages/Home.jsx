import React from 'react'
import './Home.css'
function Home(){
  return(
<section class="image-section">
  <div className='main'>
    <main>Take care of your body it's the only place you have to live</main>
  </div>
  <div class="image-container">
    <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" alt="your-image-alt"/>
  </div>
  <div class="button-container">
    <a href="#" class="button">Join us</a>
  </div>
</section>
  )
}
export default Home