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
  transition: color 0.3s ease; 

  &:hover {
    text-decoration: none;
  }

  
  ${({ isHome }) =>
    isHome &&
    `
      &:hover > span {
        transform: scale(1.1); 
        color: green; 
        transition: transform 0.3s ease, color 0.3s ease; 
      }
  `}
`;

const IconLabel = styled.span`
  display: flex;
  align-items: center;
  transition: color 0.3s ease; 
  &:hover {
    color: darkblue; 
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
          isHome={item.path === '/'} 
        >
          <IconLabel>
            {item.icon} 
            {item.label && index !== 0 && ` ${item.label}`} 
          </IconLabel>
          {index < breadcrumbItems.length - 1 && <Separator>   {'|'} </Separator>}
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};
