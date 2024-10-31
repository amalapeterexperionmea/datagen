// Button.js
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ label, variant = "primary", onClick, type = "button" }) => (
  <BootstrapButton type={type} variant={variant} onClick={onClick}>
    {label}
  </BootstrapButton>
);

export default Button;
