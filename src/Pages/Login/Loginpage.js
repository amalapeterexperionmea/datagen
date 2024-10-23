

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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${props => (props.disabled ? "#cccccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  margin-top: 10px;
  
  &:hover {
    background-color: ${props => (props.disabled ? "#cccccc" : "#0056b3")};
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const StyledLinkButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  padding: 0;
  
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
  margin-bottom: 10px;
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

  const navigate = useNavigate(); // Initialize navigation hook

  // Hardcoded super admin credentials
  const superAdmins = [
    { email: "superadmin1@datagen.com", password: "admin123" },
    { email: "superadmin2@datagen.com", password: "admin456" }
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password match any hardcoded super admin
    const isAdmin = superAdmins.some(
      (admin) => admin.email === email && admin.password === password
    );

    if (isAdmin) {
      // Redirect to /layout if credentials are correct
      navigate("/layout");
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
        : "Password must be at least 6 characters long.",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        
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
          {/* <StyledLinkButton onClick={() => alert("Register clicked")}>
            Not a member? Register
          </StyledLinkButton> */}
        </Links>
      </Form>
    </Container>
  );
}

export default LoginPage;
