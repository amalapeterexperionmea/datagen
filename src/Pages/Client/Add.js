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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/addclient', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Client added successfully:', data);
        navigate('/client');  
      } else {
        const errorData = await response.json();
        console.error('Error adding client:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
              onSubmit={handleSubmit} 
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
