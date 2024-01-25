import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const post = useLoaderData();
  const { id, title, userId, body } = post;

  const goback = useNavigate();

  const handlerGoback = () => {
    goback(-1);
  };

  return (
    <div>
      <h3>Detail about Your post:{id}</h3>
      <h5>{title}</h5>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handlerGoback} className="btn-btn">
        Go Back
      </button>
    </div>
  );
};

export default PostDetail;
