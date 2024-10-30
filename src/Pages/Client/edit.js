import { Container, Card, Row, Col } from "react-bootstrap"; 
import React, { useState, useEffect } from "react"; 
import styled from "styled-components"; 
import { useNavigate, useLocation } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left:15px;
  padding-top:10px;
  background-color: #f4f4f9; 
  height:550px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0; 
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-size: 13px;
  color: #2a6f97;
`;

const Header = styled.h2`
  text-align: center;
  color: #1b4965;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 96%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right:20px;
`;

const UpdateButton = styled.button`
 margin-top: 20px;
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
   margin-top: 20px;
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

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rowData } = location.state || {};
  const [formData, setFormData] = useState({
    name: "",
    shortName: "",
    domain: "",
    postgres: [],
    mongodb: [],
  });
  
  const [currentPostgres, setCurrentPostgres] = useState("");
  const [currentMongodb, setCurrentMongodb] = useState("");

  useEffect(() => {
    if (rowData) {
      setFormData({
        name: rowData.name || "", 
        shortName: rowData.shortname || "", 
        domain: rowData.domain ||"", 
        postgres: Array.isArray(rowData.postgres) ? rowData.postgres : [],  
        mongodb: Array.isArray(rowData.mongodb) ? rowData.mongodb : [],
      });
    }
  }, [rowData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPostgres = () => {
    if (currentPostgres && formData.postgres.length < 8) {
      setFormData((prevData) => ({
        ...prevData,
        postgres: [...prevData.postgres, currentPostgres],
      }));
      setCurrentPostgres("");
    } else if (formData.postgres.length >= 8) {
      alert("You can only add a maximum of 8 PostgreSQL entries.");
    }
  };

  const handleAddMongodb = () => {
    if (currentMongodb && formData.mongodb.length < 8) {
      setFormData((prevData) => ({
        ...prevData,
        mongodb: [...prevData.mongodb, currentMongodb],
      }));
      setCurrentMongodb("");
    } else if (formData.mongodb.length >= 8) {
      alert("You can only add a maximum of 8 MongoDB entries.");
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
    navigate("/client"); 
  };
  const handleCancel = () => {
    navigate("/client");
  };

  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="text-black m-5" style={{ borderRadius: "10px", overflow: 'hidden' }}>
            <FormContainer>
              <Header>Update Client</Header>
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
                  <UpdateButton type="submit">Update</UpdateButton>
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

export default Update;
