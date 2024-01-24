import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const friends = useLoaderData();
  console.log(friends);
  return (
    <div>
      <h3>These are my friends:{friends.length}</h3>
      <div className="friends-content">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
