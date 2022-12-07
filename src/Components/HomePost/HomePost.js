import React from "react";
import "./HomePost.css";

const check_parity = (a) => {
  if (a % 2 === 0) {
    return "reverse";
  } else return "";
};

const HomePost = ({ order, post }) => {
 
  return (
    <div
      className={`post-container post-container-${check_parity(
        order
      )} d-flex w-100 `}
    >
      <div className="d-flex h-100 post-caption">
        <div className="caption-title title"> {post.title} </div>
        <div className="caption-p commontext">
          {post.description.split("\n").map((i) => {
            return <p>{i}</p>;
          })}
        </div>
      </div>
      <div className="h-100 post-image-container">
        <img className="" id="post-image" src={post.image} alt="" />
      </div>
    </div>
  );
};

export default HomePost;
