import React , {useEffect , useState} from 'react';
import PhotoCarousel from '../Components/Carousel/Carousel';
import PostsContainer from '../Components/PostsContainer/PostsContainer'; 



const Accueil = () => {

  const general_carousel = {
    id : '01',
    image : ''
  }

  const [carousels , setcarousels] = useState([general_carousel,general_carousel])
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
        setcarousels(tab)
      }
    )
    .catch(err => console.log(err));
  }

  useEffect(()=>{
    fetch_carousel()
  } , [])


    return (
  <>
    <PhotoCarousel carousels={carousels} />
    <PostsContainer />
  </>
  );
}

export default Accueil;