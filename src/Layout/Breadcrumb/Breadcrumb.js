

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeIconImage from '../icons/Homeicon.png'; 


// Breadcrumb configuration
const breadcrumbConfig = [
  { label: 'Home', path: '/layout', icon: <img src={HomeIconImage} alt="Home" style={{ width: '32px', height: '32px' }} /> },
  { label: 'Client List', path: '/client' },
  { label: 'Client Form', path: '/form', parentPath: '/client' },
  { label: 'User', path: '/user' },
  { label: 'Data Generation', path: '/data-generation' }
];





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
    color: darkblue; /* Change color on hover */
  }

  display: flex; /* Ensure items are aligned */
  align-items: center; /* Center icon and text vertically */
`;

export const Breadcrumb = ({ currentPath }) => {
  const navigate = useNavigate();

  // Function to get the breadcrumb items based on currentPath
  const getBreadcrumbItems = () => {
    const items = [];
    const currentItem = breadcrumbConfig.find(item => item.path === currentPath);

    // Always add Home as icon only
    items.push({ label: 'Home', path: '/layout', icon: breadcrumbConfig[0].icon }); // Using the Home icon image

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

  // Remove duplicate Home items
  if (breadcrumbItems.length > 1 && breadcrumbItems[breadcrumbItems.length - 1].label === 'Home') {
    breadcrumbItems.pop(); // Remove the last Home if it's a duplicate
  }

  const handleBreadcrumbClick = (index) => {
    navigate(breadcrumbItems[index].path); // Navigate to the selected path
  };

  return (
    <BreadcrumbWrapper>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem key={index} onClick={() => handleBreadcrumbClick(index)}>
          {item.label === 'Home' ? (
            item.icon // Render the Home icon image
          ) : (
            <>
              {item.icon} {/* Render icon if present */}
              {item.label} {/* Render label for other items */}
            </>
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};
