import React, { useState }  from "react";
import './CardsContainer.css'
import CardHomepage from "../CardHomepage/CardHomepage";

const CardsContainer = () =>{
    const [nb_cards , setnb_cards] = useState(0);

    return (
        <div className=" my-5 mx-5 d-flex cardscontainer">
            <CardHomepage setnb_cards={setnb_cards} order={0} />
            <CardHomepage setnb_cards={setnb_cards} order={1} />
            <CardHomepage setnb_cards={setnb_cards} order={2} />
            <CardHomepage setnb_cards={setnb_cards} order={3} />
        </div>
    );

}

export default CardsContainer;