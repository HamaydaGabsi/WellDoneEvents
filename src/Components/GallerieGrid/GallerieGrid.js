import React from 'react'
import './GallerieGrid.css'




const GallerieGrid = ({posts}) => {



    return (
        <div className='grid-container'>
            {posts.map((e,index)=>{
                return(
                    <img src={e} key={index} />
                )
            }
            )
            }
        </div>
    )
}


export default GallerieGrid;