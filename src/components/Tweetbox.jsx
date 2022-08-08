import { Avatar, Button } from "@mui/material";
import React from "react";
import "./Tweetbox.css";

const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input className='tweetbox__image-input' type="text" placeholder="(Optional) Enter image URL" />
        <Button className="tweetbox__tweet-button">Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
