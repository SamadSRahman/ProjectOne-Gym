import React from 'react'
import "./Classes.css"
import Card from '../Components/Card';
import Footer from './Footer';

const Classes = () => {


  let array =[{
    data: "https://images.pexels.com/photos/8436715/pexels-photo-8436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:"Yoga"
  },
  {
    data: "https://images.pexels.com/photos/11385977/pexels-photo-11385977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:"Body Building"
  },
  {
    data: "https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:"Strength Training"
  },
  {
    data: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:"Zumba Classes"
  },
  {
    data: "https://images.pexels.com/photos/4754120/pexels-photo-4754120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text:"Boxing"
  }]

  return (
    <div className='Classes-Main'>
      <div className='Classes-Image'>
        <img 
          src="https://i.ytimg.com/vi/eBSmNDTm5bg/maxresdefault.jpg" 
          alt="image" 
        />
      </div>

      <div className='Classes-FirstText'>
        <h1>OUR CLASSES </h1>
        <span>  Prefer to workout in a group? We've got a class for that.
        </span>
      </div>

      <div className='Classes-SecondText'>
        <h1>Recommended Classes</h1>
        <span>__</span>
        <p>We have selected some of our favourite classes for you to try.</p>
      </div>

      <div className='Classes-Scroller'>
        {array.map((i) =>{
          return(
            <Card data={i.data} text={i.text} />
          )
        })}
      </div>

      <div className='Classes-ThirdText'>
        <h1>EXPLORE ALL CLASSES</h1>
        <span>__</span>
        <p>Whatever type of of workout you're looking for, you'll find it here. </p>
      </div>

      <Footer />

    </div>
  )
}

export default Classes