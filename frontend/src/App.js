import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import your Footer component
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* First Section with star.png */}
      <div className="home-background">
        <Navbar />
        <div className="content-container">
          <h1>The Ultimate Risk Management</h1>
          <h1>Experience Is Here.</h1>

          {/* Unclickable Button */}
          <div className="astro-button-container">
            <button className="gradient-button" disabled>
              iSolvRisk
            </button>
            {/* Image of astronaut */}
            <img src="/astro.png" alt="Astronaut" className="astro-image" />
          </div>
        </div>
      </div>

      {/* Second Section with home.png */}
      <div className="scroll-background">
        <div className="scroll-content">
          {/* Story Section */}
          <div className="story-container">
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              Transforming risk management into an engaging, intuitive, and rewarding experience.
            </p>
            <p className="story-description">
              By revolutionizing risk management, our mission is to bridge the gap between academic learning and real-world application, equipping individuals with essential decision-making skills for today’s dynamic workforce.
            </p>
            {/* Learn More Button */}
            <button className="learn-more-button">
              Learn More
            </button>
          </div>

          {/* Our Services Section */}
          <div className="services-container">
            <h2 className="gradient-text">Our Services</h2>

            <div className="services-row">
              <div className="service-item">
                <h3 className="gradient-text">The Gauntlet</h3>
                <p className="service-description">
                  Gauntlets combine the energy of professional networking with hackathon-style activities, offering immersive, in-person experiences. Hosted at events, classrooms, conferences, or workplaces, participants are grouped into teams to solve high-level risk management and insurance challenges.
                </p>
                <a href="#" className="explore-link">Explore</a>
              </div>

              <div className="service-item">
                <h3 className="gradient-text">The Rumble</h3>
                <p className="service-description">
                  Rumbles are immersive gamified experiences for sports fans, blending trivia, strategy and competition into a one-of-a-kind event with Risk Management at the center. Teams collaborate to solve university sports-related scenarios, enhancing critical thinking, teamwork, and connection within the sports community.
                </p>
                <a href="#" className="explore-link">Explore</a>
              </div>
            </div>

            {/* Ideation Innovation and Course Builder side by side */}
            <div className="services-row">
              <div className="service-item">
                <h3 className="gradient-text">Ideation Innovation</h3>
                <p>Coming soon is the Ideation Innovation, an agile B2B SaaS platform built to streamline decision-making within organizations.</p>
              </div>

              <div className="service-item">
                <h3 className="gradient-text">Course Builder</h3>
                <p>Coming soon is the Course Builder, an end-to-end gamified risk management experience that allows professionals to curate gamified content for their continued education, collegiate or certificate courses, professional designation.</p>
              </div>
            </div>

            {/* Self-Serve Gauntlet and Self-Serve Rumble */}
            <div className="services-row">
              <div className="service-item">
                <h3 className="gradient-text">Self-Serve Gauntlet</h3>
                <p>Coming soon is the Self-Serve Gauntlet, which allows you the flexibility to create and host your own gamified experience that transforms complex challenges into exciting opportunities for growth and teamwork.</p>
              </div>

              <div className="service-item">
                <h3 className="gradient-text">Self-Serve Rumble</h3>
                <p>Coming soon is the Self-Serve Rumble, which allows you to design and execute your own unique scenarios, tailored to your vision and on your schedule, while fostering the same critical thinking, collaboration, and connection that make Rumbles so impactful.</p>
              </div>
            </div>

            {/* Meet the Team Section */}
            <div className="meet-the-team">
              <h2 className="green-text">MEET THE TEAM</h2>
              <p>Our dedicated and passionate team is focused on delivering outstanding results and providing innovative solutions. With a blend of diverse expertise and a shared vision, we collaborate to create experiences that will surpass your expectations. Get to know the people that make it all possible!</p>
              <button className="learn-more-button">More About Us</button>

              {/* Team Members */}
              <div className="team-members">
                <div className="team-member">
                  <h3>Joseph Zaarour</h3>
                  <p>CEO and Founder</p>
                </div>
                <div className="team-member">
                  <h3>Robert Cartwright Jr.</h3>
                  <p>VP - Business Development</p>
                </div>
                <div className="team-member">
                  <h3>Doreen Marchetti</h3>
                  <p>VP - Partnerships</p>
                </div>
                <div className="team-member">
                  <h3>Lizabeth Murphy</h3>
                  <p>VP - Operations & People</p>
                </div>
                <div className="team-member">
                  <h3>Vasyl Zhupnyk, CPA</h3>
                  <p>VP - Accounting & Finance</p>
                </div>
                <div className="team-member">
                  <h3>Bobby Edwards</h3>
                  <p>VP - Marketing & Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
