import React from "react";
import "./Navbar.css";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import { useAuth } from "./AuthProvider";
import { getAuthUrl } from "./auth";

function Navbar() {
  const [{ user }, dispatch] = useAuth();
  // const user = true;

  const handleLogin = async () => {
    const authUrl = await getAuthUrl();
    window.location.href = authUrl;
  };

  console.log("Logged in User:", user); // Log user

  return (
    <div className="navbar">
      <div class="navbar-lineOne">
        <div className="nav-buttons">
          <NavigateBeforeOutlinedIcon className="nav-btn nav-btn-left" />
          <NavigateNextOutlinedIcon className="nav-btn" />
        </div>
        {!user ? (
          <div className="nav-login-signup">
            <span>Sign Up</span>
            <button onClick={handleLogin}>
              <strong>Log in</strong>
            </button>
          </div>
        ) : (
          <div className="nav-loggedIn">
            <button className="explore-premium-btn">Explore Premium</button>
            <button className="install-app-btn">
              <DownloadForOfflineOutlinedIcon className="install-icon" />
              Install App
            </button>
            <div className="bg">
              <NotificationsOutlinedIcon className="idk" />
            </div>
            <div className="bg">
              {/* replace with first Letter of user.displayname and a bg color as well */}
              <NotificationsOutlinedIcon className="idk" />
            </div>
          </div>
        )}
      </div>
      {user && (
        <div className="navbar-lineTwo">
          <button className="navbar-lineTwo-content">All</button>
          <button className="navbar-lineTwo-content">Music</button>
          <button className="navbar-lineTwo-content">Podcasts</button>
          <button className="navbar-lineTwo-content">Audiobooks</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
