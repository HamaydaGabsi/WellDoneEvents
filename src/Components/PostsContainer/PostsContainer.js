import React from "react";
import './PostsContainer.css'
import HomePost from "../HomePost/HomePost";

const PostsContainer = () =>{

    return (
        <div className=" my-5 mx-5 d-flex cardscontainer">
            <HomePost order={0} />
            <HomePost order={1} />
            <HomePost order={2} />
            <HomePost order={3} />
        </div>
    );

}

export default PostsContainer;