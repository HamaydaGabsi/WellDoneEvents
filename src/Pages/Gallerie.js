import React ,{useState , useEffect} from 'react';
import GallerieGrid from '../Components/GallerieGrid/GallerieGrid';


const Gallerie =({Id_lieux}) =>{
    const [gallerieposts , setgallerieposts] = useState([])
    const [id_lieux , setid_lieux] = useState()
    const fetch_gallerieposts = () => {
        if(Id_lieux!=undefined)
        fetch(`http://localhost:5000/api/lieux/get/active/lieux/${Id_lieux}`)
        .then(response => response.json())
        .then(data => {
            if(data)
            {console.log(data)
            setgallerieposts(data.data.images)}})
        .catch(err => console.error(err))
    }

    useEffect(fetch_gallerieposts , [])
    return(

        <div className='gallerie mt-5 ms-5 me-5'>
            <GallerieGrid gallerieposts = {gallerieposts} />
        </div>
    )
}

export { Gallerie};