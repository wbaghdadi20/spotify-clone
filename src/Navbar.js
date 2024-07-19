import React from "react";
import "./Navbar.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { useAuth } from "./AuthProvider";
import { getAuthUrl } from "./auth";

function Navbar() {
  const [{ user }, dispatch] = useAuth();

  const handleLogin = async () => {
    const authUrl = await getAuthUrl();
    window.location.href = authUrl;
  };

  console.log("Logged in User:", user); // Log user

  return (
    <div className="navbar">
      <div className="nav-buttons">
        <NavigateBeforeOutlinedIcon className="btn left" />
        <NavigateNextOutlinedIcon className="btn" />
      </div>
      {!user ? ( // Conditionally render the login and signup buttons
        <div className="nav-login-signup">
          <span>Sign Up</span>
          <button onClick={handleLogin}>
            <strong>Log in</strong>
          </button>
        </div>
      ) : (
        <div className="nav-hello-user">
          <span>Hello, {user.display_name}</span>{" "}
          {/* Replace `display_name` with the correct field from user object */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
