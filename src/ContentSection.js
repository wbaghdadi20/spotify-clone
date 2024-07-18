import React from "react";
import Article from "./Article";
import "./ContentSection.css";

function ContentSection() {
  const articles = Array.from({ length: 7 }, (_, i) => <Article key={i} />);

  return (
    <div className="content-section">
      <div className="content-section-lineOne">
        <h3 className="underline-pointer">Popular artists</h3>
        <span className="underline-pointer">Show all</span>
      </div>
      <div className="content-section-lineTwo">{articles}</div>
    </div>
  );
}

export default ContentSection;
