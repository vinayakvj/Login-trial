import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

function DashBoard() {
  return (
    <div className="dash">
      <div>
        <SideBar />
      </div>
      <div className="outlet">
        {/* <div className='back-space'>
            hi1111
          </div> */}
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoard;
