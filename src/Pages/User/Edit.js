import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9; // Gray background for the entire page
`;

const FormContainer = styled.div`
  width: 60%;
  margin: 0 0 0 20px;
  padding: 20px 60px 20px 70px;
  background-color: #fff; // White background for the form
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px; // Optional: Adds rounded corners
`;

const Title = styled.h2`
  text-align: left;
  color: #333;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const InputWrapper = styled.div`
  width: 48%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
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
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #17a2b8;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: gray;
  color: white;
`;

const EditUser = ({ existingData }) => { // Accept existingData as a prop
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    user_type: 'Super Admin',
    email: '',
    password: '',
    confirm_password: '',
  });

  useEffect(() => {
    // Prefill the form with existing data
    if (existingData) {
      setFormData({
        name: existingData.name || '',
        username: existingData.username || '',
        user_type: existingData.user_type || 'Super Admin',
        email: existingData.email || '',
        password: '', // You might want to leave passwords empty for security
        confirm_password: '',
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
    console.log('Form submitted:', formData);
    // Add your update logic here
  };

  const handleCancel = () => {
    setFormData({
      name: existingData.name || '',
      username: existingData.username || '',
      user_type: existingData.user_type || 'Super Admin',
      email: existingData.email || '',
      password: '',
      confirm_password: '',
    });
  };

  return (
    <PageContainer>
      <FormContainer>
        <Title>Edit User</Title>
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
            <SubmitButton type="submit">Update</SubmitButton> {/* Updated button text */}
            <CancelButton type="button" onClick={handleCancel}>Cancel</CancelButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default EditUser;
