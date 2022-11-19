import React, { useEffect, useState }  from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard.js'
import './Services.css'


const Services = () => {

    const general_card = {
        title : 'TITLE',
        image : ''
    }
    const [cards , setcards] = useState([general_card,general_card])

    const fetch_cards=() => {
        fetch('/api/services/active/post')
        .then(response => response.json())
        .then(data => {
            if(data.data.length !== 0)
            setcards(data.data)
        })
    }

    useEffect(fetch_cards , [])
    return (
        <div className='CardsContainer d-flex '>
            <ServiceCard card ={cards[0]} />
            <ServiceCard card ={cards[1]} />
        </div>
    )
}

export default Services;