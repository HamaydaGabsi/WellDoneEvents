import React , {useEffect , useState} from 'react';
import GallerieGrid from '../Components/GallerieGrid/GallerieGrid';
import Loader from '../Components/Loader/Loader';
import { Helmet } from 'react-helmet-async';
import SoonMessage from '../Components/ComingSoon';




const Gallerie =({id}) =>{
   
    const [gallerieposts , setgallerieposts] = useState([])
    const [gallerie_loading , setgallerie_loading] = useState(false)  //change to true
    const fetch_gallerieposts = () => {
        if(id!==undefined)
        fetch(`/api/lieux/get/active/lieux/${id}`)
        .then(response => response.json())
        .then(data => {
            if(data)
            {
            setgallerieposts(data.data.images)
            setgallerie_loading(false)
        }})
        .catch(err => console.error(err))
    }

    useEffect(fetch_gallerieposts , [id , gallerie_loading])

    return(
        
        <>
        <Helmet>
          <meta name='description' content='Gallerie Page' />
        </Helmet>
        <div className='gallerie mt-3 ms-3 me-3'>
            {gallerie_loading ?<div className='gallerie-loader d-flex'> <Loader/> </div> : <GallerieGrid posts = {gallerieposts} />}
            
        </div>
      <div>
        <SoonMessage /> 
        {/*coming soon message*/}
      </div>

        </>
    )
   
}

export { Gallerie};
