import React from 'react'
import "./input.css"

function Input(props) {
  return (
    <div className='form'>
        <label>{props.name}</label>
        <input className='input' type={props.type}/>
    </div>
  )
}

export default Input