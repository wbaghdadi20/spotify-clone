import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function SideBar({ search }) {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <img
          className="spotify-logo"
          title="Spotify"
          alt=""
          src="https://zeevector.com/wp-content/uploads/Spotify-Black-and-White-Logo.png"
        />
        <div
          className="sidebar-section-line home"
          style={{ opacity: search ? 0.7 : 1 }}
        >
          <HomeIcon />
          <span>Home</span>
        </div>
        <div
          className="sidebar-section-line search"
          style={{ opacity: search ? 1 : 0.7 }}
        >
          <SearchOutlinedIcon />
          <span>Search</span>
        </div>
      </div>

      <div className="sidebar-section your-library">
        <div className="sidebar-section-line library">
          <LibraryMusicIcon />
          <span title="Collapse Your Library">Your Library</span>
        </div>
        <AddOutlinedIcon className="library-plus-icon" />

        <div className="sidebar-subsection">
          <h4>Create your first playlist</h4>
          <small>It's easy, we'll help you</small>
          <button>Create playlist</button>
        </div>

        <div className="sidebar-subsection">
          <h4>Let's find some podcasts to follow</h4>
          <small>We'll keep you updated on new episodes</small>
          <button>Browse podcasts</button>
        </div>

        <div className="sidebar-footer">
          <p>
            <span>Legal</span>
            <span>Safety & Privacy Center</span>
            <span>Privacy Policy</span>
          </p>
          <p>
            <span>Cookies</span>
            <span>About Ads</span>
            <span>Accessibility</span>
          </p>
          <p>
            <span>Notice at Collection</span>
            <span>Your Privacy Choices</span>
          </p>
          <p>
            <span className="underline">Cookies</span>
          </p>

          <button>
            <LanguageOutlinedIcon />
            English
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
