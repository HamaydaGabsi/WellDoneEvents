import React from "react";
import './PostsContainer.css'
import HomePost from "../HomePost/HomePost";

const PostsContainer = ({posts}) =>{

    const createPost = (post,index) =>{
        return (
            <HomePost order={index} post= {post} />
        )
    }

    const generate_posts = (posts) =>{
        return posts.map(
            createPost
        )
    }
    return (
        <div className=" my-5 mx-5 d-flex cardscontainer">
            {generate_posts(posts)}
        </div>
    );

}

export default PostsContainer;