import React from "react";
import "./Feed.css";
import Post from "./Post";
import Tweetbox from "./Tweetbox";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />

      <Post />
    </div>
  );
};

export default Feed;
