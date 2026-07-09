import React from 'react'
import './Muslima.css'

function Card({image, name, text}) {
  return (
    <div className='card'>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p>{text}</p>
    </div>
  )
}

export default Card