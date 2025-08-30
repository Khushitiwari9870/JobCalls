import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mobile.length === 10 && !isNaN(mobile)) {
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });
      const data = await res.json();
      alert(data.message);
    } else {
      alert("Please enter a valid 10 digit number");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">apna</div>
        <nav>
          <a href="#">Product</a>
          <a href="#">Enterprise</a>
          <a href="#">Blogs</a>
          <a href="#">Pricing</a>
          <a href="#">Looking for a job?</a>
        </nav>
        <a href="#" className="btn-login">Login/Sign up</a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Left */}
        <div className="hero-left">
          <img
            src="https://via.placeholder.com/280x350.png?text=Profile+Image"
            alt="Profile"
          />
          <h1>
            Hire your <br /> dream team with apna
          </h1>
          <p>
            Streamline your recruitment with AI-driven precision. Single
            solution from fresher to experienced hiring.
          </p>
          <button className="watch-btn">▶ Watch video</button>
        </div>

        {/* Right (Form) */}
        <div className="hero-right">
          <h2>Let's get started</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              placeholder="Enter 10 digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength="10"
              required
            />
            <button type="submit" className="continue-btn">Continue</button>
          </form>
          <a href="#" className="enterprise-link">
            Click here for Enterprise login
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className="stats">
        <div>
          <span>6 Crore+</span> Candidates
        </div>
        <div>
          <span>7 Lakh+</span> Employers use apna
        </div>
        <div>
          <span>900+</span> Cities covered
        </div>
      </div>
    </div>
  );
}