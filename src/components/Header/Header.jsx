import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import ActiveLink from "../Activelink/ActiveLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <h1>GYMSHARK</h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/friends">Friends</ActiveLink>
        </li>
        <li>
          {" "}
          <ActiveLink to="/about">About</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/posts">Posts</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
