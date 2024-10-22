// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f9;
  /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/
`;

const Title = styled.h2`
  text-align: left;  // Changed from center to left
  color: #333;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const InputWrapper = styled.div`
  width: 48%; // Adjusted to provide space between input fields
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  /*border: 1px solid #ccc; 
  border-radius: 5px; */
  box-sizing: border-box;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; // Align buttons to the right
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px; // Space between buttons

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #17a2b8; // Changed to #17a2b8
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: gray; // Changed to gray
  color: white;
`;

const ManageUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    user_type: 'Super Admin', // Default value for user type
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      username: '',
      user_type: 'Super Admin', // Reset to default value
      email: '',
      password: '',
      confirm_password: '',
    });
  };

  return (
    <FormContainer>
      <Title>Manage User</Title>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <InputWrapper>
            <label>Name:</label>
            <InputField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Username:</label>
            <InputField
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </InputWrapper>
        </FormRow>
        <FormRow>
          <InputWrapper>
            <label>User Type:</label>
            <SelectField
              name="user_type"
              value={formData.user_type}
              onChange={handleInputChange}
            >
              <option value="1">Super Admin</option>
              <option value="2">Admin</option>
              <option value="3">User</option>
              <option value="4">Client</option>
            </SelectField>
          </InputWrapper>
          <InputWrapper>
            <label>Email:</label>
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </InputWrapper>
        </FormRow>
        <FormRow>
          <InputWrapper>
            <label>Password:</label>
            <InputField
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Confirm Password:</label>
            <InputField
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
            />
          </InputWrapper>
        </FormRow>
        <ButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton> 
          <CancelButton type="button" onClick={handleCancel}>Cancel</CancelButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default ManageUser;
