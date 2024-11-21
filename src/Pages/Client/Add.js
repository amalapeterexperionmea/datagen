import { Container, Card, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../Components/FormLibrary/Form";


const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const clientFields = [
 
    { label: 'Name', type: 'text', name: 'name', required: true },
    { label: 'Short Name', type: 'text', name: 'shortName', required: true },
    { label: 'Domain', type: 'text', name: 'domain' },
    { label: 'PostgreSQL', type: 'textline', name: 'postgres' },
    { label: 'MongoDB', type: 'textline', name: 'mongodb' },
  ];



  const clienthandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const clienthandleCancel = () => {
    navigate("/client");
  };

  return (
     <Container
    style={{ width: "100%", marginTop: "40px", padding: "20px" }}
  >        
  <Card className="shadow-sm" >
  <Card.Body style={{ padding: "10px", backgroundColor: "#f4f4f9", maxHeight: "100vh",overflowY:"auto", overflow:"hidden" }}>
<Form
           fields={clientFields}  
              formData={formData}     
              onChange={handleChange}  
              onSubmit={clienthandleSubmit} 
              onCancel={clienthandleCancel}  
              showAdd={true}
              layout="Standard"
              />
          </Card.Body>
          </Card>
  
    </Container>
  );
};

export default Add;
