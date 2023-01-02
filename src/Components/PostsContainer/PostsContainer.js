import React from "react";
import './PostsContainer.css'
import HomePost from "../HomePost/HomePost";
import Loader from "../Loader/Loader";

const PostsContainer = ({posts  , loading}) =>{

    const createPost = (post,index) =>{
        return (
            <HomePost key={index} order={index} post= {post} />
        )
    }

    const generate_posts = (posts) =>{
        return posts.map((e,index) =>
            createPost(e,index)
        )
    }
    return (
        loading ? (
        <div className="posts-loader d-flex">
        <Loader />
        </div>
        ) 
        : 
        <div className="d-flex cardscontainer">
            {generate_posts(posts)}
        </div>
    );

}

export default PostsContainer;