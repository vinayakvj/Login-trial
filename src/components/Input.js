import React from 'react'
import "./input.css"

function Input(props) {
    const {name,type}=props
  return (
    <div className='form'>
        <label>{name}</label>
        <input className='input' type={type} id={name} name={name}/>
    </div>
  )
}

export default Input