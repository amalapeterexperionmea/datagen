

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
        <BreadcrumbItem key={index} onClick={() => handleBreadcrumbClick(index)}>
          {item.icon} 
          {item.label && index !== 0 && ` ${item.label}`} 
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};
