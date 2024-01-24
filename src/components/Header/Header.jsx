import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
 <div className="container">
    <div className="content">
    <h1>GYMSHARK</h1>
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/contact">Contact</Link>
    </nav>
   </div>
 </div>
  );
};

export default Header;
