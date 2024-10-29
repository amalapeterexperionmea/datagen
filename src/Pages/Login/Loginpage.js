


import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import anime from "animejs/lib/anime.es.js"; 
import loginPattern2 from "../../Layout/icons/loginpattern2.jpg";



const Page = styled.div`
  background: url(${loginPattern2});
  background-size: cover; 
  background-repeat: no-repeat; 
  display: flex;
  flex-direction: column;
  height: 100vh; 
  width: 100vw; 
  place-content: center;
  position: fixed; 
  top: 0;
  left: 0;
`;


const Container = styled.div`
  display: flex;
  height: 410px;
  margin: 0 auto;
  width: 640px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
`;

const Left = styled.div`
  
  background:#FFFDD0;
  height: calc(100% - 40px);
  position: relative;
  width: 50%;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    height: 100%;
    width: calc(100% - 40px);
    max-height: 270px;
  }
`;

const Right = styled.div`
  background: white;
  position: relative;
  width: 50%;
  box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
  padding: 30px;

  @media (max-width: 767px) {
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 100;
  margin: 0;
  
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); 
  font-family: 'Poppins', sans-serif;
`;

const EULA = styled.div`
  color: #2A6F97;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 20px;
`;

const Form = styled.form`
  position: relative;
  margin-top: -230px;
`;

const Label = styled.label`
  color: black;
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  background: transparent;
  color: black;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #2a6f97;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  flex: 1;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px 0 15px;
`;

const TogglePasswordButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  flex: 1;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPasswordButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  flex: 1;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;

function LoginPage({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const navigate = useNavigate();

  const superAdmins = [
    { email: "admin@gmail.com", password: "admin" }
    
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
    setSubmitAttempted(true);
  
    const emailError = validateEmail(email) ? "" : "Invalid email address.";
    const passwordError = validatePassword(password) ? "" : "Password must be at least 1 character long.";
    setErrors({ email: emailError, password: passwordError });
  
    const isAdmin = superAdmins.some(
      (admin) => admin.email === email && admin.password === password
    );
  
    if (!emailError && !passwordError && isAdmin) {
      setIsAuthenticated(true); 
      navigate("/"); 
    } else if (!isAdmin && !emailError && !passwordError) {
      setLoginError("Invalid email or password.");
    }
  };
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const animatePath = (offset) => {
    anime({
      targets: "path",
      strokeDashoffset: offset,
      duration: 700,
      easing: "easeOutQuart",
    });
  };

  return (
    <Page>
      <Container>
        <Left>
          <Title>Login</Title>
          <EULA>Datagen</EULA>
          <EULA>Username:admin@gmail.com</EULA>
          <EULA>password:admin</EULA>
        </Left>
        <Right>
          <svg viewBox="0 0 320 300">
            {/* SVG Path */}
          </svg>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onFocus={() => animatePath(0)}
            />
            {submitAttempted && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <Label htmlFor="password">Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={() => animatePath(-336)}
            />
            {submitAttempted && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

            <ButtonGroup>
              <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide Password" : "Show Password"}
              </TogglePasswordButton>

              <Button type="submit">Login</Button>

              <ForgotPasswordButton onClick={() => alert("Redirect to forgot password page")}>
                Forgot Password?
              </ForgotPasswordButton>
            </ButtonGroup>
            {submitAttempted && loginError && <ErrorMessage>{loginError}</ErrorMessage>}
          </Form>
        </Right>
      </Container>
    </Page>
  );
}

export default LoginPage;


