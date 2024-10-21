
import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
  background-color: transparent;
  padding: 15px;
  height: 100vh;
  width: 220px;
`;

const MenuList = styled.ul`
 
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 20px 25px; 
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif; 
  font-weight: 500; 
  font-size: 1.1em; 
  letter-spacing: 0.5px; 
  transition: background-color 0.4s, transform 0.4s, box-shadow 0.4s, color 0.4s; 
  display: flex; 
  align-items: center; 
  border-radius: 8px; 
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px) scale(1.02); 
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

const LogoutItem = styled.li`
  padding: 20px 25px;
  color: white;
  cursor: pointer;
  font-family: 'Poppins', sans-serif; 
  font-weight: 500; 
  font-size: 1.1em; 
  letter-spacing: 0.5px;
  display: flex; 
  align-items: center; 
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  
  width: 80px; /* Reduced width */
  left: 10px; /* Center it within the sidebar */

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Simple hover background */
  }
`;


const MenuIcons = () => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem><i className="fas fa-user"></i> Client</MenuItem>
        <MenuItem><i className="fas fa-user"></i> User</MenuItem>
        <MenuItem><i className="fas fa-chart-line"></i> Data Generation</MenuItem>
        <LogoutItem><i className="fas fa-sign-out-alt"></i>Logout</LogoutItem>
      </MenuList>
    </MenuWrapper>
  );
};

export default MenuIcons;
