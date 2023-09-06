import React from 'react'
import { useLocation } from 'react-router-dom'
import "./signup.css";

function Signup() {
    const location = useLocation();
    console.log(location.state)
    const data = location.state;
  return (
    <div className='box-body'>
    {/* <div>Signup {data.map((user) => {
      return <p>{user.name} {user.age}</p>
    })}</div> */}
    <div className='small-box red'>red</div>
    <div className='small-box blue'>blue</div>
    </div>
  )
}

export default Signup