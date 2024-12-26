import React, { useState } from 'react';
import './List.css';

const ContactList = ({ contacts, onUpdateContact, onDeleteContact }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '', phone: '' });

  const handleEdit = (contact) => {
    setIsEditing(contact.id);
    setEditData(contact);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateContact(isEditing, editData);
    setIsEditing(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="contactTableContainer">
      <table className="contactTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="contactRow">
              {isEditing === contact.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                      required
        
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      name="phone"
                      value={editData.phone}
                      onChange={handleChange}
                      required
                      maxLength="10"
                      minLength="10"
                    />
                  </td>
                  <td>
                    <button className="saveButton" onClick={handleUpdate}>
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <button className="editButton" onClick={() => handleEdit(contact)}>
                      Edit
                    </button>
                    <button className="deleteButton" onClick={() => onDeleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
