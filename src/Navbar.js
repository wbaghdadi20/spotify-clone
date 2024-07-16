import React from "react";
import "./Navbar.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-buttons">
        <NavigateBeforeOutlinedIcon className="btn left" />
        <NavigateNextOutlinedIcon className="btn" />
      </div>
      <div className="nav-login-signup">
        <span>Sign Up</span>
        <button>
          <strong>Log in</strong>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
