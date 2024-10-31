// Form.js
import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';

const Form = ({ fields, formData, onChange, onSubmit }) => {
  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'number':
      case 'date':
      case 'time':
        return (
          <Input
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={formData[field.name]}
            onChange={onChange}
          />
        );
      case 'select':
        return (
          <Select
            key={field.name}
            label={field.label}
            name={field.name}
            options={field.options}
            value={formData[field.name]}
            onChange={onChange}
          />
        );
      case 'checkbox':
        return (
          <Checkbox
            key={field.name}
            label={field.label}
            name={field.name}
            checked={formData[field.name]}
            onChange={onChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <BootstrapForm onSubmit={onSubmit}>
      {fields.map(renderField)}
      <div className="d-flex justify-content-end mt-3">
        <Button label="Generate" variant="primary" type="submit" />
        <Button label="Cancel" variant="secondary" className="ms-2" />
      </div>
    </BootstrapForm>
  );
};

export default Form;
