import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 500px;
  margin-top: 25px;
  margin-left: 10px;
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
const Header = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-size: 25px;
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
  font-size: 15px;
`;

const CancelButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortName: "",
    domain: "",
    postgres: [], 
    mongodb: [], 
  });
  const [currentPostgres, setCurrentPostgres] = useState(""); 
  const [currentMongodb, setCurrentMongodb] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPostgres = () => {
    if (currentPostgres) {
      setFormData((prevData) => ({
        ...prevData,
        postgres: [...prevData.postgres, currentPostgres],
      }));
      setCurrentPostgres(""); 
    }
  };

  const handleAddMongodb = () => {
    if (currentMongodb) {
      setFormData((prevData) => ({
        ...prevData,
        mongodb: [...prevData.mongodb, currentMongodb],
      }));
      setCurrentMongodb(""); 
    }
  };

  const handleRemovePostgres = (item) => {
    setFormData((prevData) => ({
      ...prevData,
      postgres: prevData.postgres.filter((entry) => entry !== item),
    }));
  };

  const handleRemoveMongodb = (item) => {
    setFormData((prevData) => ({
      ...prevData,
      mongodb: prevData.mongodb.filter((entry) => entry !== item),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <FormContainer>
      <Header>Client Registration</Header>
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

        <Label>PostgreSQL:</Label>
        <Input
          type="text"
          value={currentPostgres}
          onChange={(e) => setCurrentPostgres(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddPostgres();
            }
          }}
        />
        <div>
          {formData.postgres.map((item, index) => (
            <span
              key={index}
              style={{ marginRight: "10px", display: "inline-block" }}
            >
              {item}
              <span
                onClick={() => handleRemovePostgres(item)}
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  color: "black",
                }}
              >
                ×
              </span>
            </span>
          ))}
        </div>

        <Label>MongoDB:</Label>
        <Input
          type="text"
          value={currentMongodb}
          onChange={(e) => setCurrentMongodb(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddMongodb();
            }
          }}
        />
        <div>
          {formData.mongodb.map((item, index) => (
            <span
              key={index}
              style={{ marginRight: "10px", display: "inline-block" }}
            >
              {item}
              <span
                onClick={() => handleRemoveMongodb(item)}
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  color: "black",
                }}
              >
                ×
              </span>
            </span>
          ))}
        </div>

        <ButtonContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
          <CancelButton type="button" onClick={() => console.log("Cancelled")}>
            Cancel
          </CancelButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default Form;
