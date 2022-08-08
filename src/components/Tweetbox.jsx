import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import db from "../firebase";
import "./Tweetbox.css";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Ivan Tranquilan",
      username: "@ivantranq",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQEJjF4my9aTsQ/profile-displayphoto-shrink_800_800/0/1578876912058?e=1665619200&v=beta&t=s6sUI9471G8Jp6kdVhdhx6KJq0gpemKll0freQPEsvQ",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEJjF4my9aTsQ/profile-displayphoto-shrink_800_800/0/1578876912058?e=1665619200&v=beta&t=s6sUI9471G8Jp6kdVhdhx6KJq0gpemKll0freQPEsvQ" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
            required
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox__image-input"
          type="text"
          placeholder="(Optional) Enter image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox__tweet-button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
