import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return <div>
    <h4>ID: {id}</h4>
    <h5>{title}</h5>
    <span className="details-text"><Link to ={`/post/${id}`}>Show Details</Link></span>
    
    <button>Show Post Detail</button>
  </div>;
};

export default Post;
