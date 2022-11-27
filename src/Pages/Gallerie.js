import React ,{useState} from 'react';
import GallerieGrid from '../Components/GallerieGrid/GallerieGrid';


const Gallerie =() =>{
    const [Id_lieux , setId_lieux] = useState("");

    return(

        <div className='gallerie mt-5 ms-5 me-5'>
            <GallerieGrid id={Id_lieux} />
        </div>
    )
}

export default Gallerie;