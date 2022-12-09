import React , {useEffect, useState} from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { Helmet } from 'react-helmet-async';
import './Contact.css'

const Contact = () =>{
   const  [socials , setsocials] = useState({})

    const fetch_socials = () => {
        fetch('http://localhost:5000/api/social/get/social')
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0])
            setsocials(data.data[0])
        } )
        .catch(err => console.log(err))
    }
    useEffect(fetch_socials,[])
    return (
        <div className="d-flex contact-container">
            <Helmet>
                <meta name='description' content='Contact Page' />
            </Helmet>
            <ContactForm />
            <div className="info me-5 w-50  d-flex">
                <ul className="my-auto info-list  commontext mx-auto">
                    <li>Numéro de téléphone: <span className="info-text"> {socials.tel}</span></li>
                    <li>Email:<span className="info-text"> {socials.email}</span></li>
                    <li>Adresse:<span className="info-text"> {socials.adress}</span></li>
                    <li>Page facebook: <a id="welldone-facebook" target='_blank' href={socials.facebook}> Well Done Events</a> </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Contact;
