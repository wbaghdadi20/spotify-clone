import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
