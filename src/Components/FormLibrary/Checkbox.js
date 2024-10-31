// Checkbox.js
import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox = ({ label, name, checked, onChange }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Check 
      type="checkbox" 
      label={label} 
      name={name} 
      checked={checked} 
      onChange={onChange} 
    />
  </Form.Group>
);

export default Checkbox;
