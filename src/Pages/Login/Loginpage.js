

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #5fa8d3 0%, #2a6f97 50%, #1b4965 100%);
  font-family: 'Arial', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #1b4965;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 15px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: ${props => (props.disabled ? "#cccccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  margin-top: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.disabled ? "#cccccc" : "#0056b3")};
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const StyledLinkButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const TogglePasswordButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false); // New state

  const navigate = useNavigate();

  const superAdmins = [
    { email: "admin@gmail.com", password: "admin" },
    { email: "superadmin2@datagen.com", password: "admin456" },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true); 

    const isAdmin = superAdmins.some(
      (admin) => admin.email === email && admin.password === password
    );

    if (isAdmin) {
      navigate("/");
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors({
      ...errors,
      email: validateEmail(value) ? "" : "Invalid email address.",
    });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors({
      ...errors,
      password: validatePassword(value)
        ? ""
        : "Password must be at least 1 character long.",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {hasSubmitted && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>} {/* Show error only if submitted */}

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {hasSubmitted && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>} {/* Show error only if submitted */}

        <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide Password" : "Show Password"}
        </TogglePasswordButton>

        <Button
          type="submit"
          disabled={!email || !password || errors.email || errors.password}
        >
          Login
        </Button>

        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

        <Links>
          <StyledLinkButton onClick={() => alert("Forgot Password clicked")}>
            Forgot Password?
          </StyledLinkButton>
        </Links>
      </Form>
    </Container>
  );
}

export default LoginPage;
