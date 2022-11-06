import React from 'react'
import './Pokemon.css'

function Pokemon(props) {

  return (
    <div className='container'>
       
       
        <h2>HP: {props.hp} </h2>
        <img src={props.img} alt={props.name}/>
        <button onClick={props.attack}>Attack!</button>
        <h3>Status:chrizard is attacking pikachu</h3>
        
       
    </div>
  )
}

export default Pokemon