import React, { useEffect } from "react";
import "./Body.css";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";
import { useAuth } from "./AuthProvider";

function Body() {
  const [{ accessToken, user }, dispatch] = useAuth();

  useEffect(() => {
    // console.log("body useEffect");
    const fetchUserData = async () => {
      if (accessToken) {
        // console.log("Got access token");
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        dispatch({ type: "SET_USER", payload: data });
        // console.log("dispatched user");
      }
    };

    fetchUserData();
  }, [accessToken]);

  const contentSections = Array.from({ length: 7 }, (_, i) => (
    <ContentSection key={i} />
  ));

  return (
    <div className="body">
      <div className="body-main-content">
        <Navbar />
        {contentSections}
      </div>
    </div>
  );
}

export default Body;
