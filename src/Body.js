import React from "react";
import "./Body.css";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";

function Body() {
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
