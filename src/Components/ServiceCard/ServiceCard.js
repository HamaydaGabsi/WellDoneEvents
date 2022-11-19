import React from 'react';
import './ServiceCard.css'


const ServiceCard = ({card}) =>{
    
    return(
        <div className='card-container '>
            <div className='shadow-cover shadow-cover-visible d-flex'>
                <div className='cardtitle title'>
                    {card.title}
                </div>
            </div>
        </div>
    )
 
}

export default ServiceCard;