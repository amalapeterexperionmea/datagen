import React from 'react';
import { Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Button from './Button';
import Multiple_Inputs from './Multiple_Inputs';


const Form = ({ fields, formData, onChange, onSubmit, showGenerate, showUpdate,showAdd ,showCancel = true, layout = "standard" }) => {
  const renderField = (field) => {
    const fieldProps = {
      label: field.label,
      name: field.name,
      value: formData[field.name],
      onChange,
    };

    const fieldComponent = (() => {
      switch (field.type) {
        case 'text':
        case 'number':
        case 'date':
        case 'time':
          return <Input type={field.type} {...fieldProps} />;
        case 'select':
          return <Select {...fieldProps} options={field.options} />;
        case 'checkbox':
          return <Checkbox {...fieldProps} checked={formData[field.name]} />;
          case 'textline':
            return <Multiple_Inputs {...fieldProps} placeholder={field.placeholder} />;
          default:
            return null;
      }
    })();

    return layout === "grid" ? (
      <Col md={3} key={field.name} className="mb-2">
        {fieldComponent}
      </Col>
    ) : (
      <div key={field.name} className="form-group mb-2">
        {fieldComponent}
      </div>
    );
  };

  return (
    <BootstrapForm onSubmit={onSubmit}>
      {layout === "grid" ? (
        <Row>
          {fields.map(renderField)}
        </Row>
      ) : (
        fields.map(renderField)
      )} 
      <div className="d-flex justify-content-end mt-3 gap-2">
        {showGenerate && <Button variant="primary" type="submit" className="me-2">Generate</Button>}
        {showUpdate && <Button variant="primary" type="submit" className="me-2">Update</Button>}
        {showAdd && <Button variant = "primary" type = "submit" className = "me-2">Add</Button>}
        {showCancel && <Button variant="secondary" onClick={( ) => window.history.back()}>Cancel</Button>}
      </div>
    </BootstrapForm>
  );
};

export default Form;
