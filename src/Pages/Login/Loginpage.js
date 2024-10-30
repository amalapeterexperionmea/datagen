



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import loginPattern2 from "../../Layout/icons/loginpattern2.jpg";

const Page = styled.div`
  background: url(${loginPattern2});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  display: flex;
  width: 640px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 90%;
    max-width: 320px;
    height: auto;
  }
`;

const Left = styled.div`
  background: linear-gradient(135deg, #153448, #2a6f97);
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
`;

const Right = styled.div`
  background-color: white;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
  text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px; 
`;

const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  bottom: -50px; 
  left: 0;
  width: 100%;
  text-align: center; 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  color: #333;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
  color: #333;
  &:focus {
    border-color: #2a6f97;
    outline: none;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #2a6f97;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #0056b3;
  }
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #2a6f97;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #0056b3;
  }
`;

const ForgotPasswordButton = styled.button`
  background: none;
  border: none;
  color: #2a6f97;
  cursor: pointer;
  font-size: 14px;
  text-align: right;
  &:hover {
    text-decoration: underline;
  }
`;

function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Get navigate function

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true); // Set authenticated state
        navigate("/"); // Redirect to the root page
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Failed to connect to the server.');
    }
  };

  return (
    <Page>
      <Container>
        <Left>
          <Title>Login</Title>
        </Left>
        <Right>
          <Wrapper>
            <Form onSubmit={handleLogin}>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Label htmlFor="password">Password</Label>
              <InputWrapper>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </TogglePasswordButton>
              </InputWrapper>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
              <ButtonGroup>
                <Button type="submit">Login</Button>
                <ForgotPasswordButton type="button">Forgot Password?</ForgotPasswordButton>
              </ButtonGroup>
            </Form>
          </Wrapper>
        </Right>
      </Container>
    </Page>
  );
}

export default LoginPage;
