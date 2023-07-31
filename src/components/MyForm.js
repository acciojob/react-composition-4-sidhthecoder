import React from 'react';
import Form from './Form'; // Import the Form component

const MyForm = () => {
  const handleSubmit = (formData) => {
    // Do something with the form data
    console.log(formData);
  };

  const fields = [
    { name: 'fullName', type: 'text', label: 'Full Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type:'password',label:'Password'},
  ];

  return (
    <div>
      <h2>My Form</h2>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default MyForm;