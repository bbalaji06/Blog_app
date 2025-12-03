import React from "react";
import { Link } from "react-router-dom";
import "../styles/PostCard.css";

function PostCard({ post, onDelete, canEdit, onClick }) {
  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleCardClick = (e) => {
    // Don't open detail if clicking edit/delete buttons
    if (e.target.closest(".post-actions")) return;
    onClick && onClick(post);
  };

  return (
    <div className="post-card" onClick={handleCardClick}>
      <div className="post-card-header">
        <h2 className="post-title">{post.title}</h2>
        <span className="post-author">By {post.author_username}</span>
      </div>

      <div className="post-content">
        <p>{post.content.substring(0, 150)}...</p>
      </div>

      <div className="post-footer">
        <span className="post-date">{formattedDate}</span>

        {canEdit && (
          <div className="post-actions">
            <Link
              to={`/post/${post.id}/edit`}
              className="btn-edit"
              onClick={(e) => e.stopPropagation()}
            >
              Edit
            </Link>
            <button
              className="btn-delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(post.id);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostCard;
