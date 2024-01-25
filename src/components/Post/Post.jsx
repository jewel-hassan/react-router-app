import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navId = useNavigate();
 

  const handlerNav = () => {
    navId(`/post/${id}`);
  };
  return (
    <div className="post-child">
      <h4>ID: {id}</h4>
      <h5>{title}</h5>
      <div className="btn-button">
        <span className="details-text">
          <Link to={`/post/${id}`}>Show Details</Link>
        </span>

        <button onClick={handlerNav}>Show Post Detail</button>
      </div>
    </div>
  );
};

export default Post;
