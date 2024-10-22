import React from 'react';
import styled from 'styled-components';
import BaseMenuItem from './BaseMenuItem';

const LogoutItem = styled(BaseMenuItem)`
  margin-top: auto; /* Pushes Logout to the bottom of the sidebar */

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    transform: none; /* Prevents Logout text from transforming */
  }

  /* Keeping the text stable on hover */
  span {
    transition: none; /* Disable transitions for the text */
  }

  &:hover i {
    transform: scale(1.15); /* Keep icon hover effect */
    color: #E86850; /* Change icon color on hover */
  }
`;

const LogoutMenuItem = () => {
  return (
    <LogoutItem>
      <i className="fas fa-sign-out-alt"></i> Logout
    </LogoutItem>
  );
};

export default LogoutMenuItem;
