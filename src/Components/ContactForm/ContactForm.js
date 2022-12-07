import React, { useEffect } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Envoyer')
  let otherstatus = false
  const setotherstatus = () => {
    const select = document.querySelector('#type')
    if(select.value === 'Other') {
    add_text_field()
    otherstatus = true
    }
    else {
      remove_text_field()
      otherstatus = false
    }
  }
 
  const remove_text_field = () => {
    const text_field = document.querySelector('#other_text')
    const container = document.querySelector('.other-container')
    text_field.classList.add('invisible')
    text_field.classList.add('no-height')
    container.classList.add('no-height')
    container.classList.remove('mb-3')
  }
  const add_text_field = () => {
    const text_field = document.querySelector('#other_text')
    const container = document.querySelector('.other-container')
    text_field.classList.remove('invisible')
    text_field.classList.remove('no-height')
    container.classList.remove('no-height')
    container.classList.add('mb-3')
  }
  useEffect(setotherstatus)
  const togglebuttonclass = () => {
    const button = document.querySelector('.submit')
    button.classList.add('sent')
  }
  const send_from_info = (info) => {
    fetch('http://localhost:5000/api/contact/add/contact',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(info)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    if(data.message === 'contact added')
   { setFormStatus('Envoyé')
    togglebuttonclass()}
  })
  .catch(err => console.error(err))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('En cours')
    const { name, prénom, email, telephone,adresse, type, date , message , other_text } = e.target.elements
    let conFom = {
      nom: name.value,
      prenom : prénom.value,
      email: email.value,
      telephone : telephone.value,
      adress : adresse.value,
      event : type.value,
      date : date.value,
      message: message.value,
    }
    if(otherstatus) {
      conFom.event = other_text.value
    }
    send_from_info(conFom)
    console.log(conFom)
  }
  
  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="d-flex mb-3 w-100 input-container">
          <input className="form-control me-3 d-inline-block "
            type="text"
            id="name"
            placeholder='Nom'
            required />
          <input className="form-control ms-3 d-inline-block "
            type="text"
            id="prénom"
            placeholder='Prénom'
            required />
        </div>
        <div className="mb-3">
          <input className="form-control"
           type="email" 
           id="email" 
           placeholder='E-mail'
           required />
        </div>
        <div className="mb-3">
          <input className="form-control" 
          type="text" 
          id="telephone"
          placeholder='Telephone' 
          required />
        </div>
        <div className="mb-3">
          <input className="form-control" 
          type="text" 
          id="adresse"
          placeholder='Adresse complète' 
          required />
        </div>
        <div className="d-flex mb-3 w-100 input-container">
          <div className='d-flex w-100 select-container'>
            <select onChange={setotherstatus} className='me-3 form-control d-inline-block' 
            name="Type d'évènement" 
            id="type" 
            required>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="Other">Other</option>
            </select>
        </div>
          <input className="form-control ms-3 d-inline-block "
            type="date"
            id="date"
            placeholder='Date'
            required />
        </div>
        <div className='d-flex w-100 no-height input-container other-container'>
        <input className="form-control no-height invisible  d-inline-block "
          type="text"
          id="other_text"
          placeholder='Other'
          />
        </div>
        <div className="mb-3">
          <textarea className="form-control" 
          id="message" 
          placeholder='Message'
          required />
        </div>
        <div className='button-container d-flex'>
        <button className="btn submit btn-danger mb-3" type="submit">
         <span className='commontext formstatus'> {formStatus} </span>
        </button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm
