import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import index from './index.css';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map((contact) => (contact.id === id ? updatedContact : contact)));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="styles.appContainer">
      <h1>Contact Management System</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList
        contacts={contacts}
        onUpdateContact={updateContact}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
