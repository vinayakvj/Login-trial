import userEvent from '@testing-library/user-event'
import React from 'react'
import { Navigate ,useNavigate} from 'react-router-dom'

function NotFound() {
    const nav = useNavigate();
    setTimeout(() => {
        nav("/") 
    },1000)
  return (
<h1>not found</h1>
  )
}

export default NotFound