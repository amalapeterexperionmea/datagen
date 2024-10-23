
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { breadcrumbConfig } from '../../Config'; // Import the configuration

const BreadcrumbWrapper = styled.nav`
  position: fixed;  
  top: 75px;      
  left: 270px;    
  margin: 0;      
  display: flex;
  z-index: 1000;  
`;

const BreadcrumbItem = styled.span`
  margin-right: 10px;
  cursor: pointer;
  color: blue;

  &:not(:last-child)::after {
    content: '>';
    margin-left: 10px;
  }

  &:hover {
    text-decoration: none;
    color: darkblue;
  }

  display: flex;
  align-items: center;
`;

export const Breadcrumb = ({ currentPath }) => {
  const navigate = useNavigate();

  const getBreadcrumbItems = () => {
    const items = [];
    const currentItem = breadcrumbConfig.find(item => item.path === currentPath);

    // Add Home item with icon only if it’s not already the current path
    if (currentPath !== '/layout') {
      items.push(breadcrumbConfig[0]); // Home item
    }

    if (currentItem) {
      // Add parent item if it exists
      if (currentItem.parentPath) {
        const parentItem = breadcrumbConfig.find(item => item.path === currentItem.parentPath);
        if (parentItem) {
          items.push(parentItem); // Push parent item (e.g., Client)
        }
      }
      // Add the current item (e.g., Addclient)
      items.push(currentItem);
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  const handleBreadcrumbClick = (index) => {
    const targetPath = breadcrumbItems[index].path;
    if (targetPath) {
      navigate(targetPath); // Navigate to the selected path
    }
  };

  return (
    <BreadcrumbWrapper>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem key={index} onClick={() => handleBreadcrumbClick(index)}>
          {item.icon} {/* Render icon for each item */}
          {item.label && index !== 0 && ` ${item.label}`} {/* Render label for other items except Home */}
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};
