import React , {useEffect , useState} from 'react';
import PhotoCarousel from '../Components/Carousel/Carousel';
import PostsContainer from '../Components/PostsContainer/PostsContainer'; 
import { Helmet } from 'react-helmet-async';



const Accueil = () => {

  //code relative to carousel data (fetching setting state ...)

  const [carousels , setcarousels] = useState([])
  const [carouselsIsLoading , setcarouselloading] = useState(true)
  const [postsLoading , setpostsloading] = useState(true)

  const fetch_carousel = () =>{
    fetch('http://localhost:5000/api/carousel/active/carousels')
    .then(response => response.json())
    .then((data) =>{ 
        setcarousels(data.data)
        setcarouselloading(false)
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
        setpostsloading(false)
    })
}

useEffect(fetch_posts, [])
useEffect(fetch_carousel, [])


    return (
  <>
    <Helmet>
          <meta name='description' content='Home Page' />
      </Helmet>
    <PhotoCarousel carousels={carousels} loading = {carouselsIsLoading} />
    <PostsContainer posts={posts} loading={postsLoading} />
  </>
  );
}

export default Accueil;