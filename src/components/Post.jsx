import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__header-text">
            <h3>
              Ivan Tranquilan{" "}
              <span className="post__header-special">
                <VerifiedIcon className="post__badge" />
                {" "}@ivantranq
              </span>
            </h3>
          </div>
          <div className="post__header-description">
            <p>
              Lorem
            </p>
          </div>
          </div>
          <img
            src="https://media0.giphy.com/media/8vy2TW9pFBQqHzsZQQ/giphy.gif"
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
        </div>
      </div>
    </div>
  );
};

export default Post;
