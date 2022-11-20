import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Cardsrow.css'

const Cardsrow = ({cards}) => {

    const create_card = (card) => {
      return  (<ServiceCard card={card} />)
    }
    
    const generate_cards_row = (cards) => {
        return (cards.map(create_card))
    }

    return (
        <div className='cardsrow d-flex'>
            {generate_cards_row(cards)}
        </div>
    )
}
export default Cardsrow;