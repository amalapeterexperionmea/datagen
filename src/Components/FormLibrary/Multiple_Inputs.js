import React from "react";
import { Form } from "react-bootstrap";

const Multiple_Inputs = ({ label, name, value, onChange, placeholder }) => {
  return (
    <Form.Group controlId={`form${name}`} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={1}
        style={{
          height: '60px', 
          overflowY: 'auto',
        }}
      />
    </Form.Group>
  );
};

export default Multiple_Inputs;
