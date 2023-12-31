import React from "react";
import "./sidebar.css";
import { Routes, Link, Route } from "react-router-dom";
import Students from "../pages/Students";

function SideBar() {
  const tags = [
    {
      link: "/dashboard/students",
      name: "Students",
    },
    {
      link: "/dashboard/content",
      name: "Content",
    },
    {
      link: "/dashboard/Careers",
      name: "Careers",
    },
    {
      link: "/dashboard/Message",
      name: "Message",
    },
  ];

  return (
    <div>
      <div className="dashboard">
        <nav></nav>
        <div className="navs">
          {tags.map((item) => {
            return (
              <div className="tags">
                <Link to={item.link}>{item.name}</Link>
              </div>
            );
          })}
          {/* <div className='tags'><Link to='/students'>Students</Link></div>
            <div className='tags'><Link to='/content'>Conetent</Link></div>
            <div className='tags'><Link to='/careers'>Careers</Link></div>
            <div className='tags'><Link to='/Message'>Message</Link></div> */}
        </div>
      </div>
      <div>
        {/*  <Routes>
                <Route path="/students" element={<Students />}/>
                
            </Routes> */}
      </div>
    </div>
  );
}

export default SideBar;
