import React from "react";
import Navbar from "./Navbar";
import "./App.css";  // Ensure your CSS file is imported

function App() {
  return (
    <div className="home-background">
      <Navbar />
      <div style={{ marginTop: "80px", padding: "1rem" }}>
        {/* Add the rest of your app content here */}
        <h1>The Ultimate Risk Managmnt</h1>
        <h1>Experience Is Here.</h1>
      </div>
    </div>
  );
}

export default App;
