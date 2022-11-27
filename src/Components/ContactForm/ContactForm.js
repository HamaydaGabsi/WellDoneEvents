import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, prénom, email, telephone,adresse, type, date , message } = e.target.elements
    let conFom = {
      name: name.value,
      prénom : prénom.value,
      email: email.value,
      telephone : telephone.value,
      adresse : adresse.value,
      type : type.value,
      date : date.value,
      message: message.value,
    }
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
        <select className='me-3 form-control d-inline-block' 
        name="Type d'évènement" 
        id="type" 
        required>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="">Other</option>
        </select>
          <input className="form-control ms-3 d-inline-block "
            type="text"
            id="date"
            placeholder='Date'
            required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" 
          id="message" 
          placeholder='Message'
          required />
        </div>
        <button className="btn btn-danger mb-3" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm
