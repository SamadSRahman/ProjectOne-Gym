import React from 'react'
import "./Card.css"

const Card = (props) => {

    let data = props.data;
    let text = props.text;

  return (
    <div className='Card'>
      <img src={data} alt="image" />
      <h4>{text}</h4>
    </div>
  )
}

export default Card
