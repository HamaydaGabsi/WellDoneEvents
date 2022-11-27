import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import './Contact.css'
const Contact = () =>{
    return (
        <div className="d-flex contact-container">
            <ContactForm />
            <div className="info me-5 d-flex">
                <ul className="my-auto mx-auto">
                    <li>Numéro de téléphone: +216 00 000 000</li>
                    <li>Email: xxx@gmail.com</li>
                    <li>Adresse: 000 xxx 0000</li>
                    <li>Page facebook: Lorem ipsum</li>
                    <li>Youtube: Lorem ipsum</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;
