import React, { useState } from 'react';

const CrudForm = ({ addEntry }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <form className="crud-form" onSubmit={handleSubmit}>
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
      
      <button type="submit">Add</button>
    </form>
  );
};

export default CrudForm;