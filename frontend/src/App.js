import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px", padding: "1rem" }}>
        {/* Add the rest of your app content here */}
        <h1>Welcome to ISolveRisk!</h1>
        <p>Explore our vision, services, products, team, and partners.</p>
      </div>
    </div>
  );
}

export default App;
