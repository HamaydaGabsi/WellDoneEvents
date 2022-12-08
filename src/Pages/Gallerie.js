import React , {useEffect , useState} from 'react';
import GallerieGrid from '../Components/GallerieGrid/GallerieGrid';
import Loader from '../Components/Loader/Loader';


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
            setgallerie_loading(false)
        }})
        .catch(err => console.error(err))
    }

    useEffect(fetch_gallerieposts , [id])

    return(

        <div className='gallerie mt-5 ms-5 me-5'>
            {gallerie_loading ?<div className='gallerie-loader d-flex'> <Loader/> </div> : <GallerieGrid posts = {gallerieposts} />}
            
        </div>
    )
   
}

export { Gallerie};
