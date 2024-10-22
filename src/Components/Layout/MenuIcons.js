

import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
  background-color: transparent;
  padding: 15px;
  height: 100vh;
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;  /* Ensures the menu items take up available space */
`;

const MenuItem = styled.li`
  padding: 20px 25px;
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  letter-spacing: 0.5px;
  transition: background-color 0.4s, transform 0.4s, box-shadow 0.4s;
  display: flex;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px) scaleX(1.02);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }

  i {
    margin-right: 10px;
    transition: transform 0.4s, color 0.4s;
  }

  &:hover i {
    transform: scale(1.15);
    color: #ffcc00;
  }
`;

const LogoutItem = styled(MenuItem)`
  margin-top: auto;  /* Pushes Logout to the bottom of the sidebar */

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    transform: none;  /* Prevents Logout text from transforming */
  }

  /* Keeping the text stable on hover */
  span {
    transition: none;  /* Disable transitions for the text */
  }

  &:hover i {
    transform: scale(1.15);  /* Keep icon hover effect */
    color: #E86850;  /* Change icon color on hover */
  }
`;

const MenuIcons = () => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem><i className="fas fa-user"></i> Client</MenuItem>
        <MenuItem><i className="fas fa-user"></i> User</MenuItem>
        <MenuItem><i className="fas fa-chart-line"></i> Data Generation</MenuItem>
      </MenuList>
      <LogoutItem><i className="fas fa-sign-out-alt"></i> Logout</LogoutItem>
    </MenuWrapper>
  );
};

export default MenuIcons;
