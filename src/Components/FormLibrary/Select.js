// Select.js
import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ label, name, options, value, onChange }) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label>{label}</Form.Label>
    <Form.Select name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export default Select;
