import React , {useEffect, useState} from "react";
import './PostsContainer.css'
import HomePost from "../HomePost/HomePost";

const PostsContainer = () =>{
    const general_post = {
        title : 'title',
        description : 'description',
        image :''
    }
    const [posts , setposts] = useState([general_post,general_post,general_post,general_post])
   

    const fetch_posts = () =>{
        fetch('http://localhost:5000/api/accueil/active/post')
        .then(response => response.json())
        .then(data => {
            if(data.data.length !== 0)
            setposts(data.data)
        })

    }

    useEffect(fetch_posts, [])

    return (
        <div className=" my-5 mx-5 d-flex cardscontainer">
            <HomePost order={0} post= {posts[0]} />
            <HomePost order={1} post= {posts[1]} />
            <HomePost order={2} post= {posts[2]} />
            <HomePost order={3} post= {posts[3]} />
        </div>
    );

}

export default PostsContainer;