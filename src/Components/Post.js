import React from "react";
import "./Post.css";
// Import VerifiedUser icon if you have one
// import { VerifiedUser } from '@material-ui/icons';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="flex flex-col ">
      <div className="">
      <div className="post__header">
        <img className="post__avatar" src={avatar} alt={`${displayName}'s Avatar`} />
        <div className="post__headerInfo">
          <h3 className="post__displayName">{displayName}{" "}
            <span className="post__headerSpecial">
              {/* Render the VerifiedUser icon if verified */}
              {verified && <span className="post__badge">Verified</span>}
              @{username}
            </span>
          </h3>
        </div>
      </div>
      </div>
      <div className="">
      <p className="post__text">{text}</p>

      </div>
      <div className="">
  <div>
    {image && image.length > 0 ? (
      <div className="post__body flex flex-row">
        {image.map((imgsrc, index) => (
          <img key={index} className="post__image pl-6" src={imgsrc} alt="" />
        ))}
      </div>
    ) : (
      ""
    )}
  </div>
</div>
     
    </div>
  );
}

export default Post;
