import React from 'react'
import  "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons"
  
  const Card = (props) => {


  return (
    <div className= {`${props.color} container`}  >
     <div className="flex" >
     <p>{props.date}</p>
      <img className='img' src={props.logo} alt="" />
     </div>
     <button className='btn'>Case Study</button>
     <h1>{props.heading}</h1>
     <h1>{props.subheading}</h1>
     <div className= "flex">
      <p>{props.devices}</p>
      <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
     </div>

    </div>

  )
}

export default Card