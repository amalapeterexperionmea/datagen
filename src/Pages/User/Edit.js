import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row, Container as BootstrapContainer, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled(BootstrapContainer)`
  margin-top: 80px;
`;

const EditUser = ({ existingData }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    user_type: "Super Admin",
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    if (existingData) {
      setFormData({
        name: existingData.name || "",
        username: existingData.username || "",
        user_type: existingData.user_type || "Super Admin",
        email: existingData.email || "",
        password: "",
        confirm_password: "",
      });
    }
  }, [existingData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = () => {
    setFormData({
      name: existingData?.name || "",
      username: existingData?.username || "",
      user_type: existingData?.user_type || "Super Admin",
      email: existingData?.email || "",
      password: "",
      confirm_password: "",
    });
    navigate("/searchuser");
  };

  return (
    <Container fluid className="p-0">
      <Card className="text-black m-5" style={{ borderRadius: "0px", backgroundColor: "#f4f4f9" }}>
        <Card.Body>
          <h2>Edit User</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formUserType">
                <Form.Label>User Type:</Form.Label>
                <Form.Select
                  name="user_type"
                  value={formData.user_type}
                  onChange={handleInputChange}
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Client">Client</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formConfirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" type="submit" className="me-2">
                Update
              </Button>
              <Button variant="secondary" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditUser;
