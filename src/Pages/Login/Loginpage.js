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
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
  text-align: center;
`;

const EULA = styled.div`
  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: -270px;
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

const ErrorContainer = styled.div`
  color: red;
  font-size: 12px;
  text-align: center;
  position: absolute;
  margin-top: 20px;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
`;

const TogglePasswordButton = styled.button`
  background: none;
  border: none;
  color: #2a6f97;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
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
          <EULA></EULA>
        </Left>
        <Right>
          <svg viewBox="0 0 320 300">
            {/* SVG Path */}
          </svg>
          <Wrapper>
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

              <Label htmlFor="password">Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => animatePath(-336)}
              />

              <ButtonGroup>
                <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide Password" : "Show Password"}
                </TogglePasswordButton>

                <Button type="submit">Login</Button>

                <ForgotPasswordButton onClick={() => alert("Redirect to forgot password page")}>
                  Forgot Password?
                </ForgotPasswordButton>
              </ButtonGroup>
            </Form>
            {submitAttempted && (errors.email || errors.password || loginError) && (
              <ErrorContainer>
                {errors.email && <div>{errors.email}</div>}
                {errors.password && <div>{errors.password}</div>}
                {loginError && <div>{loginError}</div>}
              </ErrorContainer>
            )}
          </Wrapper>
        </Right>
      </Container>
    </Page>
  );
}

export default LoginPage;
