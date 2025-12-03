import React from "react";
import "../styles/PostDetail.css";

function PostDetail({ post, onClose, onEdit, onDelete, canEdit }) {
  const formattedDate = new Date(post.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="post-detail-overlay" onClick={onClose}>
      <div className="post-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="detail-header">
          <h1>{post.title}</h1>
          <span className="detail-author">By {post.author_username}</span>
          <span className="detail-date">{formattedDate}</span>
        </div>

        <div className="detail-content">
          <p>{post.content}</p>
        </div>

        {canEdit && (
          <div className="detail-actions">
            <button className="btn-edit" onClick={() => onEdit(post.id)}>
              Edit Post
            </button>
            <button className="btn-delete" onClick={() => onDelete(post.id)}>
              Delete Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
