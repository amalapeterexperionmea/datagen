import { Container, Card, Row, Col } from "react-bootstrap"; 
import React, { useState } from "react"; 
import styled from "styled-components"; 
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 30px;
  background-color: #f4f4f9; 
  height:540px;
  
  @media (max-width: 768px) {
    width: 100%; 
    margin: 20px 0; 
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #2a6f97;
`;

const Header = styled.h2`
  margin-top:-8px;
  text-align: center;
  color: #1b4965;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
`;

const Tag = styled.span`
  background-color: #2a6f97;
  color: white;
  border-radius: 3px;
  padding: 3px 6px;
  margin-right: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  flex: 1;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GenerateButton = styled.button`
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #2a6f97;
  width: 85px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 15px;
  &:hover {
    opacity: 0.8;
    background-color: #1b4965;
  }
`;

const CancelButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: gray;
  width: 85px;
  height: 32px;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.8;
  }
`;

const Form = () => {
  const navigate = useNavigate();
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
  
  const handleCancel = () => {
    navigate("/client");
  };

  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="text-black m-5" style={{ borderRadius: "10px", margin: "20px", overflow: 'hidden' }}>
            <FormContainer>
              <Header>Registration Form</Header>
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
                <InputContainer>
                  {formData.postgres.map((item, index) => (
                    <Tag key={index} onClick={() => handleRemovePostgres(item)}>
                      {item} ×
                    </Tag>
                  ))}
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
                </InputContainer>

                <Label>MongoDB:</Label>
                <InputContainer>
                  {formData.mongodb.map((item, index) => (
                    <Tag key={index} onClick={() => handleRemoveMongodb(item)}>
                      {item} ×
                    </Tag>
                  ))}
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
                </InputContainer>

                <ButtonContainer>
                  <GenerateButton type="submit">Add</GenerateButton>
                  <CancelButton type="button" onClick={handleCancel}>
                    Cancel
                  </CancelButton>
                </ButtonContainer>
              </form>
            </FormContainer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
