
import React from 'react';
import styled from 'styled-components';
import MenuIcons from '../MenuItems/MenuItems';

const SidebarWrapper = styled.aside`
  background-color: #153448; 
  top:0;
  left:0;
  color: white;
  height: 100vh;
  position: fixed;
  width: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
`;

const UserType = styled.div`
  font-size: 1.4em;
  color: white;
  font-weight: 700; 
  letter-spacing: 1.5px; 
  text-align: center;
  background: linear-gradient(135deg, #5FA8D3 0%, #2A6F97 50%, #1B4965 100%); 
  border-bottom: 2px solid rgba(255, 255, 255, 0.2); 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); 
  font-family: "InterVariable", -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
    display: block;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.9rem 0.55rem;;
    transition: width .3s ease-in-out;
    white-space: nowrap;
`;

const Username = styled.div`
  padding: 10px; 
  font-size: 1.1em;
  text-align: center;
  color: white;
  background: linear-gradient(135deg, #6FAEDB 0%, #407EAF 50%, #305F8A 100%); 
  border-bottom: 3px solid rgba(0, 0, 0, 0.3); 
  box-shadow: inset 0 -2px 6px rgba(0, 0, 0, 0.15); 
  font-family: "InterVariable", -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif; 
  letter-spacing: 1.2px;
  text-transform: uppercase; 
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5); 
`;

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <UserType>Admin</UserType>
            <Username>Experion</Username> {/* Display the username here */}
            <MenuIcons />
        </SidebarWrapper>
    );
};

export default Sidebar;
