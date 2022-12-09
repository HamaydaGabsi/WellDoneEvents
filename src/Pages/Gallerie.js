import React , {useEffect , useState} from 'react';
import GallerieGrid from '../Components/GallerieGrid/GallerieGrid';
import Loader from '../Components/Loader/Loader';
import { Helmet } from 'react-helmet-async';



const Gallerie =({id}) =>{
   
    const [gallerieposts , setgallerieposts] = useState([])
    const [gallerie_loading , setgallerie_loading] = useState(true)
    const fetch_gallerieposts = () => {
        if(id!==undefined)
        fetch(`http://localhost:5000/api/lieux/get/active/lieux/${id}`)
        .then(response => response.json())
        .then(data => {
            if(data)
            {
            setgallerieposts(data.data.images)
            console.log(data.data.images)
            setgallerie_loading(false)
        }})
        .catch(err => console.error(err))
    }

    useEffect(fetch_gallerieposts , [id])

    return(
        <>
        <Helmet>
          <meta name='description' content='Gallerie Page' />
        </Helmet>
        <div className='gallerie mt-3 ms-3 me-3'>
            {gallerie_loading ?<div className='gallerie-loader d-flex'> <Loader/> </div> : <GallerieGrid posts = {gallerieposts} />}
            
        </div>
        </>
    )
   
}

export { Gallerie};
