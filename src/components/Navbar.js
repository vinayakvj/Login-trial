import React from "react";
import "./navbar.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

function Navbar() {
  return (
    <div className="navbar">
      Navbar
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    </div>
  );
}

export default Navbar;
