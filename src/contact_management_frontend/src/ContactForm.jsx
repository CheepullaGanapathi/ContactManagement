import React, { useState } from 'react';
import './Form.css';
import './List.css';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      onAddContact(formData);
      setFormData({ name: '', email: '', phone: '' });
    }
  };

  return (
    <form className="styles.form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        maxLength="10"
        minLength="10"
      />
      <button type="submit" className='add'>Add Contact</button>
    </form>
  );
  
};

export default ContactForm;
