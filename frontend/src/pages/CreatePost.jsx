import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PostForm.css";
import api from "../api/axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    if (title.length > 200) {
      setError("Title must be less than 200 characters");
      return;
    }

    if (content.length > 2000) {
      setError("Content must be less than 2000 characters");
      return;
    }

    setLoading(true);
    try {
      await api.post("/create/", { title, content });
      navigate("/my-posts");
    } catch (err) {
      setError("Failed to create post. Make sure you are authenticated.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-form-container">
      <div className="form-card">
        <h1>Create New Post</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              maxLength="200"
              required
              disabled={loading}
            />
            <small>{title.length}/200</small>
          </div>

          <div className="form-group">
            <label htmlFor="content">Post Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content here..."
              maxLength="2000"
              rows="12"
              required
              disabled={loading}
            />
            <small>{content.length}/2000</small>
          </div>

          <div className="form-buttons">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Publishing..." : "Publish Post"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/my-posts")}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
