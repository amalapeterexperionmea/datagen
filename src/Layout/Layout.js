


import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { Breadcrumb } from './Breadcrumb/Breadcrumb'; 

// Wrapper for the entire layout: sidebar, header, content
const LayoutWrapper = styled.div`
  display: flex;
`;

// The area for the main content (next to the sidebar)
const MainContent = styled.div`
  margin-left: 250px;
  padding: 30px;
  width: calc(100% - 250px); /* Adjust based on sidebar width */
  height: 100vh; /* Ensure it takes the full viewport height */
  display: flex; /* Use flexbox */
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  box-sizing: border-box; /* Ensure padding is included in width/height */
`;

// The wrapper for the content to control its max width and text alignment
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px; /* Set a max width for the content */
  text-align: center; /* Center text inside the content */
`;

const Layout = ({ children }) => {
  const currentPath = window.location.pathname; 

  return (
    <LayoutWrapper>
      <Sidebar />
      <div style={{ width: '100%' }}> {/* Header now takes the full width */}
        <Header />
        <Breadcrumb currentPath={currentPath} /> 
        <MainContent>
          <ContentWrapper>
            {children} {/* The children are now wrapped in ContentWrapper */}
          </ContentWrapper>
        </MainContent>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;

