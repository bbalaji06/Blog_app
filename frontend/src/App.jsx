import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import MyPosts from "./pages/MyPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import api from "./api/axios";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token) {
      setIsAuthenticated(true);
      setUser(username || null);
    }
  }, []);

  const handleAuth = (token, username) => {
    if (token) {
      localStorage.setItem("token", token);
    }
    if (username) {
      localStorage.setItem("username", username);
    }
    setIsAuthenticated(true);
    setUser(username || null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUser(null);
    // Also tell axios to remove header by clearing localStorage (interceptor reads it)
    alert("Logged out (frontend only)");
  };

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/posts" element={<AllPosts />} />

        <Route
          path="/my-posts"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyPosts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CreatePost />
            </ProtectedRoute>
          }
        />

        <Route
          path="/post/:postId/edit"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <EditPost />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login onAuth={handleAuth} />} />
        <Route path="/signup" element={<SignUp onAuth={handleAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
