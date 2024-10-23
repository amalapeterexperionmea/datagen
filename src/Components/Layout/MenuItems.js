

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BaseMenuItem = styled.li`
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
  margin-top: ${({ topMargin }) => topMargin || '0'};
  margin-bottom: ${({ bottomMargin }) => bottomMargin || '0'};

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

// Menu items configuration 
const menuItemsConfig = [
  {
    iconClass: "fas fa-user",
    label: "Client",
    route: "/client",
    topMargin: '10px',
    bottomMargin: '10px',
  },
  {
    iconClass: "fas fa-users",
    label: "User",
    route: "/user",
    topMargin: '10px',
    bottomMargin: '10px',
  },
  {
    iconClass: "fas fa-chart-line",
    label: "Data Generation",
    route: "/data-generation",
    topMargin: '10px',
    bottomMargin: '10px',
  },
  {
    iconClass: "fas fa-sign-out-alt",
    label: "Logout",
    isLogout: true,
    topMargin: 'auto', 
    bottomMargin: '10px',
  },
];

const MenuIcons = () => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (!item.isLogout) {
      navigate(item.route);
    } else {
      // Add your logout
    }
  };

  return (
    <nav style={{ backgroundColor: '#153448', padding: '15px', height: '100vh', width: '220px', display: 'flex', flexDirection: 'column' }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
        {menuItemsConfig.slice(0, -1).map((item, index) => (
          <BaseMenuItem key={index} onClick={() => handleItemClick(item)} topMargin={item.topMargin} bottomMargin={item.bottomMargin}>
            <i className={item.iconClass}></i>
            {item.label}
          </BaseMenuItem>
        ))}
      </ul>
      <BaseMenuItem
        onClick={() => handleItemClick(menuItemsConfig[menuItemsConfig.length - 1])}
        topMargin={menuItemsConfig[menuItemsConfig.length - 1].topMargin}
        bottomMargin={menuItemsConfig[menuItemsConfig.length - 1].bottomMargin}
      >
        <i className={menuItemsConfig[menuItemsConfig.length - 1].iconClass}></i>
        {menuItemsConfig[menuItemsConfig.length - 1].label}
      </BaseMenuItem>
    </nav>
  );
};

export default MenuIcons;
