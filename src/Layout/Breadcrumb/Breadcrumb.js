


import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { breadcrumbConfig } from '../../Config'; 

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
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
  }

  /* Add specific styles for the home icon */
  ${({ isHome }) =>
    isHome &&
    `
      &:hover > span {
        transform: scale(1.1); /* Example hover effect */
        color: green; /* Change color on hover */
      }
  `}
`;

const IconLabel = styled.span`
  display: flex;
  align-items: center;

  &:hover {
    color: darkblue; /* Change color on hover */
  }
`;

const Separator = styled.span`
  margin-left: 10px;
`;

export const Breadcrumb = ({ currentPath }) => {
  const navigate = useNavigate();

  const getBreadcrumbItems = () => {
    const items = [];
    const currentItem = breadcrumbConfig.find(item => item.path === currentPath);

    if (currentPath !== '/') {
      items.push(breadcrumbConfig[0]); 
    }

    if (currentItem) {
      if (currentItem.parentPath) {
        const parentItem = breadcrumbConfig.find(item => item.path === currentItem.parentPath);
        if (parentItem) {
          items.push(parentItem); 
        }
      }
      
      items.push(currentItem);
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  const handleBreadcrumbClick = (index) => {
    const targetPath = breadcrumbItems[index].path;
    if (targetPath) {
      navigate(targetPath); 
    }
  };

  return (
    <BreadcrumbWrapper>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem 
          key={index} 
          onClick={() => handleBreadcrumbClick(index)} 
          isHome={item.path === '/'} // Check if the item is the home icon
        >
          <IconLabel>
            {item.icon} 
            {item.label && index !== 0 && ` ${item.label}`} 
          </IconLabel>
          {index < breadcrumbItems.length - 1 && <Separator>></Separator>}
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};
