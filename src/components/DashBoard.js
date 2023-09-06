import React from 'react'
import "./dashboard.css"
import { Routes, Link,Route } from 'react-router-dom'
import Students from '../pages/Students'

function DashBoard() {
  return (
    <div>
        <div className='dashboard'>
            <nav>

            </nav>
            <div className='navs'>
            <div className='tags'><Link to='/students'>Students</Link></div>
            <div className='tags'><Link to='/content'>Conetent</Link></div>
            <div className='tags'><Link to='/careers'>Careers</Link></div>
            <div className='tags'><Link to='/Message'>Message</Link></div>
            </div>  
        </div>
        <div>
           {/*  <Routes>
                <Route path="/students" element={<Students />}/>
                
            </Routes> */}
        </div>
    </div>
  )
}

export default DashBoard