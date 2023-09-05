import React from 'react'
import image from "../assets/Group 166.png";
import "./login.css";
import Input from '../components/Input';

function Login() {
  return (
    <div className='login'>
      <div className='image-container'>
        <img className='image'  src={image}/>
      </div>
      <div className='login-form'>
        <div className='form-box'>
          <h1 className='single'>Hey,</h1>
          <h1 className='single'>Let's Start</h1>
          <p className='single'>Please Login to your account</p>
          <form>
          <Input name='username' type='text'/>
          <Input name='password' type='password'/>
          <input  type='submit'/>
          </form>
          
        </div>

      </div>
    </div>
  )
}

export default Login