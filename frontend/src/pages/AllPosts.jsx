import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import PostDetail from "../components/PostDetail";
import "../styles/PostsList.css";
import api from "../api/axios";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await api.get("/posts/");
        setPosts(res.data);
      } catch (err) {
        setError("Failed to load posts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this post?")) return;
    try {
      await api.delete(`/posts/${id}/delete/`);
      setPosts((p) => p.filter((x) => x.id !== id));
      setSelectedPost(null);
    } catch (err) {
      alert("Delete failed. Ensure you are authenticated and are the author.");
    }
  };

  return (
    <div className="posts-list-container">
      <div className="posts-header">
        <h1>All Blog Posts</h1>
        <p>Discover stories from our community</p>
      </div>

      {loading ? (
        <div className="loading">Loading posts...</div>
      ) : error ? (
        <div className="no-posts">{error}</div>
      ) : posts.length > 0 ? (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={handleDelete}
              canEdit={false}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>
      ) : (
        <div className="no-posts">
          <p>No posts yet. Be the first to share!</p>
        </div>
      )}

      {selectedPost && (
        <PostDetail
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          canEdit={false}
        />
      )}
    </div>
  );
}

export default AllPosts;
