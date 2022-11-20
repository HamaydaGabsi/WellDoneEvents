import React , {useEffect , useState} from 'react';
import PhotoCarousel from '../Components/Carousel/Carousel';
import PostsContainer from '../Components/PostsContainer/PostsContainer'; 
import test_image from '../Components/HomePost/IMG_9745.jpg';



const Accueil = () => {

  //code relative to carousel data (fetching setting state ...)
  const general_carousel = {
    id : '01',
    image : test_image
  }

  const [carousels , setcarousels] = useState([general_carousel,general_carousel , general_carousel])

  const fetch_carousel = () =>{
    let tab =[];
    fetch('http://localhost:5000/api/carousel/active/carousels')
    .then(response => response.json())
    .then((data) =>{ 
      data.data.forEach((carousel) =>{
          const activecarousel = {
            id : carousel._id,
            image : carousel.image
          }
          tab.push(activecarousel);
          }
        )
        setcarousels([...tab , general_carousel , general_carousel ])
      }
    )
    .catch(err => console.log(err));
  }

  // code relative to posts data (fetching setting state ...)
  const general_post = {
    title : 'Title',
    description : 'description',
    image : test_image,
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
useEffect(fetch_carousel, [])


    return (
  <>
    <PhotoCarousel carousels={carousels} />
    <PostsContainer posts={posts} />
  </>
  );
}

export default Accueil;