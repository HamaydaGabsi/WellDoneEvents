import React, { useEffect } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard.js'
import './Services.css'






const Services = () => {

    return (
        <div className='CardsContainer d-flex '>
            <ServiceCard />
            <ServiceCard />
        </div>
    )
}

export default Services;