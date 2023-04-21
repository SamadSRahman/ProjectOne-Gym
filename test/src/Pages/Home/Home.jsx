import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { isShow } from "../../data/atom";
import { useRecoilState } from "recoil";
import ScrollToTop from "../../Components/ScrollRestore/ScrollRestore";

function Home() {
const [isLogin,setIsLogin] = useRecoilState(isShow)
  return (

    <div className="container">
      <ScrollToTop/>
      <header class="image-section">
        <div className='main'>
          <main>Take care of your body it's the only place you have to live</main>
        </div>
        <div class="image-container">
          <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600 " alt="your-image-alt" />

        </div>
        <div class="button-container">
          <Link to='/register'><a onClick={()=>setIsLogin(false)} className="button">Join us</a></Link>
        </div>
      </header>
      <div className="main-section">
        <p>Meet our Team</p>
        <main>
          We are a team of experinced people nutrition sports and fitness<br />
          passionate experts with talent and knowledge unsurpassed in the<br />
          industry get to know us
        </main>
        <div className="section-image">
          <div className="image1">
          <img src="https://images.pexels.com/photos/6922165/pexels-photo-6922165.jpeg?auto=compress&cs=tinysrgb&w=600" alt="your-image-alt" />
          <p>Anllela Sagra</p>
          </div>
          <div className="image2">
          <img src="https://images.pexels.com/photos/7991604/pexels-photo-7991604.jpeg?auto=compress&cs=tinysrgb&w=600" alt="your-images-alt" />
          <p> Brad Schoenfeld</p>
          </div>
          <div className="image3">
          <img src="https://images.pexels.com/photos/6456294/pexels-photo-6456294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="your-image-alt" />
          <p> Matt Roberts</p>
          </div>
          <div className="image4">
          <img src="https://images.pexels.com/photos/6455824/pexels-photo-6455824.jpeg?auto=compress&cs=tinysrgb&w=600" alt="your-image-alt" />
          <p>Shaun Stafford</p>
          </div>
        </div>
      
      </div>
      <div className="price-section">
        <div className="div1">
          <span>Per Day Pass</span>
          <main className="price">200 ₹ <span>/pass</span></main>

          <ul>
            <li>1 Day Pass</li>
            <li>No Contract</li>
            <li>free Gym Access</li>

            <li>24 hour Access</li>
          </ul>
          <Link to="/register"><button>Get started</button></Link>
        </div>
        <div className="div2">
          <span>Month to Month</span>
          <main className="price">
            1000 ₹
            <span>/month</span>
          </main>
          <ul>
            <li>1000₹ joining fee</li>
            <li>No Contract</li>
            <li>free Gym Access</li>
            <li>1 Group class Included</li>
            <li>24 hour Access</li>
          </ul>
          <Link to="/register"><button>Get started</button></Link>
        </div>
        <div className="div3">
          <span className="member">Membership</span>
          <main className='para'>
            <span>From punch pass to monthly or Annual</span>
           
             At Gym Base,we offer a wide range of Membership with option to     
            suit every budget everything from one day pass.punch pass to monthly 
            annual prepared Membership whats more we wont lie you to long
            term contract giving you greater flexibility.
      </main>
        </div>
      </div>

    </div>
  )

}
export default Home;
