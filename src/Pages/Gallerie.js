import React , {useEffect , useState} from 'react';
import GallerieGrid from '../Components/GallerieGrid/GallerieGrid';


const Gallerie =({id}) =>{
   
    const [gallerieposts , setgallerieposts] = useState([])

    const fetch_gallerieposts = () => {
        if(id!==undefined)
        fetch(`http://localhost:5000/api/lieux/get/active/lieux/${id}`)
        .then(response => response.json())
        .then(data => {
            if(data)
            {
            setgallerieposts(data.data.images)}})
        .catch(err => console.error(err))
    }

    useEffect(fetch_gallerieposts , [id])

    return(

        <div className='gallerie mt-5 ms-5 me-5'>
            <GallerieGrid posts = {gallerieposts} />
        </div>
    )
   
}

export { Gallerie};
