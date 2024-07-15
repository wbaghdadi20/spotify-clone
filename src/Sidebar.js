import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function SideBar({ search }) {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <img
          className="spotify-logo"
          alt=""
          src="https://zeevector.com/wp-content/uploads/Spotify-Black-and-White-Logo.png"
        />
        <div className="sidebar-section-line home">
          <HomeIcon
            className="sidebar-icon"
            style={{ opacity: search ? 0.8 : 1 }}
          />
          <span>Home</span>
        </div>
        <div
          className="sidebar-section-line search"
          style={{ opacity: search ? 1 : 0.8 }}
        >
          <SearchOutlinedIcon className="sidebar-icon" />
          <span>Search</span>
        </div>
      </div>

      <div className="sidebar-section"></div>
    </div>
  );
}

export default SideBar;
