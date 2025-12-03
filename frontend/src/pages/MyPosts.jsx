import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import PostDetail from "../components/PostDetail";
import "../styles/PostsList.css";
import api from "../api/axios";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyPosts = async () => {
      setLoading(true);
      try {
        const res = await api.get("/posts/my-posts/");
        setPosts(res.data);
      } catch (err) {
        setError("Failed to load your posts. Make sure you are logged in.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    if (!confirm("Delete this post?")) return;
    try {
      await api.delete(`/posts/${postId}/delete/`);
      setPosts((p) => p.filter((x) => x.id !== postId));
      setSelectedPost(null);
    } catch (err) {
      alert("Delete failed.");
    }
  };

  const handleEditPost = (postId) => {
    navigate(`/post/${postId}/edit`);
    setSelectedPost(null);
  };

  return (
    <div className="posts-list-container">
      <div className="posts-header">
        <h1>My Posts</h1>
        <p>Manage and view your published posts</p>
      </div>

      {loading ? (
        <div className="loading">Loading your posts...</div>
      ) : error ? (
        <div className="no-posts">{error}</div>
      ) : posts.length > 0 ? (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={handleDeletePost}
              canEdit={true}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>
      ) : (
        <div className="no-posts">
          <p>You haven't published any posts yet. Create one now!</p>
        </div>
      )}

      {selectedPost && (
        <PostDetail
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onEdit={handleEditPost}
          onDelete={handleDeletePost}
          canEdit={true}
        />
      )}
    </div>
  );
}

export default MyPosts;
