import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widget-container">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId="1556354637547966464" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="brutedeforce"
          options={{ height: 400 }}
        />
        <TwitterShareButton 
            url="https://facebook.com/cleverprogrammer"
            options={{text: "#reactjs is awsome", via: "cleverqazi"}}    
        />
      </div>
    </div>
  );
};

export default Widgets;
