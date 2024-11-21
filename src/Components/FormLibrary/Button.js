
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ children, variant = "primary", onClick, type = "button" }) => (
  <BootstrapButton type={type} variant={variant} onClick={onClick}>
    {children}
  </BootstrapButton>
);

export default Button;
