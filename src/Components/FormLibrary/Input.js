// Input.js
import React from 'react';
import { Form , Container } from 'react-bootstrap';

const Input = ({ label, name, type = "text", value, onChange, placeholder, min, max }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>{label}</Form.Label>
    <Form.Control 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      min={min} // Useful for number, date, and time inputs
      max={max} // Useful for number, date, and time inputs
    />
  </Form.Group>
);

export default Input;
