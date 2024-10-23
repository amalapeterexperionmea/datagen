

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

//breadcrump config
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
    <path d="M8 .5l-7 7h2v7h10v-7h2l-7-7zM7 1.414L1 7h2v7h4v-4h2v4h4V7h2l-6-6-1 1z" />
  </svg>
);

const breadcrumbConfig = [
  { label: 'Home', path: '/layout', icon: <HomeIcon /> },
  { label: 'Client', path: '/client' },
  { label: 'User', path: '/user' },
  { label: 'Data Generation', path: '/data-generation' },
  // Add more breadcrumb items as needed
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
  }

  display: flex; /* Ensure items are aligned */
  align-items: center; /* Center icon and text vertically */
`;

export const Breadcrumb = ({ currentPath }) => {
  const navigate = useNavigate();

  // Include Home breadcrumb explicitly
  const breadcrumbItems = breadcrumbConfig.filter(item => currentPath === item.path || currentPath.includes(item.path));

  // Always include "Home" in the breadcrumb if not already there
  if (!breadcrumbItems.some(item => item.label === 'Home')) {
    breadcrumbItems.unshift({ label: 'Home', path: '/layout', icon: <FontAwesomeIcon icon={faHome} /> });
  }

  const handleBreadcrumbClick = (index) => {
    navigate(breadcrumbItems[index].path);
  };

  return (
    <BreadcrumbWrapper>
      {breadcrumbItems.map((item, index) => (
        <BreadcrumbItem key={index} onClick={() => handleBreadcrumbClick(index)}>
          {item.icon && item.label === 'Home' ? (
            <>
              {item.icon} {/* Render icon */}
              {item.label}
            </>
          ) : (
            item.label
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};
