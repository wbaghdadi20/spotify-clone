import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

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

      <div className="sidebar-section your-library">
        <div className="sidebar-section-line library">
          <LibraryMusicIcon />
          <span>Your Library</span>
        </div>
        <AddOutlinedIcon className="library-plus-icon" />

        <div className="sidebar-subsection">
          <h4>Create your first playlist</h4>
          <small>It's easy, we'll help you</small>
          <button>
            <strong>Create playlist</strong>
          </button>
        </div>

        <div className="sidebar-subsection">
          <h4>Let's find some podcasts to follow</h4>
          <small>We'll keep you updated on new episodes</small>
          <button>
            <strong>Browse podcasts</strong>
          </button>
        </div>

        <div className="sidebar-footer">
            
        </div>
      </div>
    </div>
  );
}

export default SideBar;
