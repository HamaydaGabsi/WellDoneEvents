import React , {useEffect , useState} from 'react';
import PhotoCarousel from '../Components/Carousel/Carousel';
import PostsContainer from '../Components/PostsContainer/PostsContainer'; 



const Accueil = () => {

  //code relative to carousel data (fetching setting state ...)

  const [carousels , setcarousels] = useState([])

  const fetch_carousel = () =>{
    fetch('http://localhost:5000/api/carousel/active/carousels')
    .then(response => response.json())
    .then((data) =>{ 
        setcarousels(data.data)
      }
    )
    .catch(err => console.log(err));
  }

  // code relative to posts data (fetching setting state ...)
const [posts , setposts] = useState([])


const fetch_posts = () =>{
    fetch('http://localhost:5000/api/accueil/active/post')
    .then(response => response.json())
    .then(data => {
        setposts(data.data)
    })
}

useEffect(fetch_posts, [])
useEffect(fetch_carousel, [])


    return (
  <>
    <PhotoCarousel carousels={carousels} />
    <PostsContainer posts={posts} />
  </>
  );
}

export default Accueil;