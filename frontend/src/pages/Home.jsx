import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home({ isAuthenticated }) {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BlogApp</h1>
          <p>Share your thoughts and read amazing stories from our community</p>

          {isAuthenticated ? (
            <div className="hero-buttons">
              <Link to="/create" className="btn btn-primary">
                Create New Post
              </Link>
              <Link to="/posts" className="btn btn-secondary">
                Explore Posts
              </Link>
            </div>
          ) : (
            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Create Posts</h3>
            <p>Write and publish your own blog posts with ease</p>
          </div>
          <div className="feature-card">
            <h3>Read Stories</h3>
            <p>Discover interesting articles from other authors</p>
          </div>
          <div className="feature-card">
            <h3>Manage Content</h3>
            <p>Edit and delete your posts anytime</p>
          </div>
          <div className="feature-card">
            <h3>Simple Interface</h3>
            <p>Easy to use and intuitive design</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
