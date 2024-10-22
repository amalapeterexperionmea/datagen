import React, { useState } from "react";
import styled from "styled-components";


const FormContainer = styled.div`
  display :flex;
  flex-direction: column;
  justify-content: left;
  width: 500px;
  margin-top:25px;
  margin-left:10px; 
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; 

`;
const GenerateButton = styled.button`
  margin-top: 20px;
   margin-right: 10px;
  padding: 10px 20px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
`;
const CancelButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortName: "",
    domain: "",
    postgres: [],
    mongodb: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleObjectChange = (e, dbName) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [dbName]: {
        ...formData[dbName],
        [name]: value,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <FormContainer>
      <h1>Client Registration</h1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Label htmlFor="shortName">Short Name:</Label>
        <Input
          type="text"
          id="shortName"
          name="shortName"
          value={formData.shortName}
          onChange={handleChange}
          required
        />

        <Label htmlFor="domain">Domain:</Label>
        <Input
          type="text"
          id="domain"
          name="domain"
          value={formData.domain}
          onChange={handleChange}
        />

        <Label htmlFor="postgresHost">PostgreSQL:</Label>
        <Input
          type="text"
          id="postgresHost"
          name="host"
          value={formData.postgres.host}
          onChange={(e) => handleObjectChange(e, "postgres")}
        />
        <Label htmlFor="mongodbHost">MongoDB :</Label>
        <Input
          type="text"
          id="mongodbHost"
          name="host"
          value={formData.mongodb.host}
          onChange={(e) => handleObjectChange(e, "mongodb")}
        />
        <ButtonContainer>
        <GenerateButton type="submit">Generate</GenerateButton>
        <CancelButton type="submit">Cancel</CancelButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default Form;
