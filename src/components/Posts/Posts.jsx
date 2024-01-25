import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h3>All posts are here:{posts.length}</h3>
      <div className="Posts-parent">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
